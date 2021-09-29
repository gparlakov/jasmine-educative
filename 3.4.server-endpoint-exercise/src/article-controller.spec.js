const { ArticleApiController } = require('./article-controller.js');

describe('ArticleApiController', () => {
  let db;
  let articleCollection;
  let articleController;

  beforeEach(() => {
    articleCollection = jasmine.createSpyObj('collection', ['findOne', 'delete']);
    db = jasmine.createSpyObj('db mock', {
      collection: articleCollection,
    });
    articleController = new ArticleApiController(db);
  });

  describe('when get called', () => {
    it('should search the article collection and resolve with the article when found', async () => {
      // arrange
      articleCollection.findOne.and.returnValue(Promise.resolve({ id: 1 }));
      // act
      const a = await articleController.get(1);
      // assert
      expect(articleCollection.findOne).toHaveBeenCalledOnceWith({ id: 1 });
      expect(a).toEqual(jasmine.objectContaining({ id: 1 }));
    });

    it('should search the article collection and reject with an object with status and message', async () => {
      // arrange
      articleCollection.findOne.and.returnValue(Promise.reject({ error: 'eee' }));
      // act
      const a = await expectAsync(articleController.get(1)).toBeRejectedWith({
        status: 'not found',
        message: 'Article with id "1" was not found.',
      });
      // assert
      expect(articleCollection.findOne).toHaveBeenCalledOnceWith({ id: 1 });
    });
  });

  describe('when delete called', () => {
    it('with an id and matching etag to version should delete the article', async () => {
      // arrange
      articleCollection.findOne.and.returnValue(Promise.resolve({ id: 1, version: '2' }));
      articleCollection.delete.and.returnValue(Promise.resolve({ id: 1, version: '2' }));
      // act
      const a = await articleController.delete(1, '2');
      // assert
      expect(articleCollection.delete).toHaveBeenCalledOnceWith({ id: 1 });
    });

    it('with an id and mismatching etag to version should not delete the article and reject with a status object', async () => {
      // arrange
      articleCollection.findOne.and.returnValue(Promise.resolve({ id: 1, version: '3' }));
      articleCollection.delete.and.returnValue(Promise.resolve({ id: 1, version: '2' }));
      // act
      const deletePromise = articleController.delete(1, '2');
      // assert
      await expectAsync(deletePromise).toBeRejectedWith({
        status: 'version mismatch',
        message: 'Article with id "1" seems to have been updated and client and server versions do not match.',
      });
      expect(articleCollection.delete).not.toHaveBeenCalled();
    });

    it('and get article fails it should reject with the same error', async () => {
      // arrange
      articleCollection.findOne.and.returnValue(Promise.reject({ status: 'not found' }));
      // act
      // assert
      await expectAsync(articleController.delete(1, '2')).toBeRejectedWith({
        status: 'not found',
        message: 'Article with id "1" was not found.',
      });
      expect(articleCollection.delete).not.toHaveBeenCalled();
    });

    it('and delete article in the DB fails it should reject with status object error', async () => {
      // arrange
      articleCollection.findOne.and.returnValue(Promise.resolve({ id: 1, version: '3' }));
      articleCollection.delete.and.returnValue(Promise.reject({}));
      // act
      // assert
      await expectAsync(articleController.delete(1, '3')).toBeRejectedWith({
        status: 'delete failed',
        message: `Article with id "1" could not be deleted.`,
      });
    });
  });
});
