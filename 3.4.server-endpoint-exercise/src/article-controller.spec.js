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
        message: 'Article with id '1' was not found.',
      });
      // assert
      expect(articleCollection.findOne).toHaveBeenCalledOnceWith({ id: 1 });
    });
  });

  describe('when delete called', () => {
    it('with an id and matching etag to version should delete the article', async () => {
      // arrange
      pending('add test logic here - hint - use `await expectAsync` ')
      // act
      // assert
    });

    it('with an id and mismatching etag to version should not delete the article and reject with a status object', async () => {
      // arrange
      pending('add test logic here - hint - use `await expectAsync` ')
      // act
      // assert
    });

    it('and get article fails it should reject with the same error', async () => {
      // arrange
      pending('add test logic here');
      // act
      // assert
    });

    it('and delete article in the DB fails it should reject with status object error', async () => {
      // arrange
      pending('add test logic here - hint - use `await expectAsync`');
      // act
      // assert
    });
  });
});
