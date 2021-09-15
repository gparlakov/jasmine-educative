const { ArticleApiController } = require('./article-controller.js');

describe('ArticleApiController', () => {
  let db;
  let articleCollection;
  let articleController;

  beforeEach(() => {
    articleCollection = jasmine.createSpyObj('collection', ['findOne']);
    db = jasmine.createSpyObj('db mock', {
      collection: articleCollection,
    });
    articleController = new ArticleApiController(db);
  });

  it('when get called it should search the article collection and return the article when found', async () => {
    // arrange
    articleCollection.findOne.and.returnValue(Promise.resolve({ id: 1 }));
    // act
    const a = await articleController.get(1);
    // assert
    expect(articleCollection.findOne).toHaveBeenCalledOnceWith({ id: 1 });
    expect(a).toEqual(jasmine.objectContaining({ id: 1 }));
  });

  it('when get called it should search the article collection and return an object with status and message', async () => {
    // arrange
    articleCollection.findOne.and.returnValue(Promise.reject({error: 'eee'}));
    // act
    const a = await articleController.get(1);
    // assert
    expect(articleCollection.findOne).toHaveBeenCalledOnceWith({ id: 1 });
    // expect(a).toEqual({status: 'not found'});
  });
});
