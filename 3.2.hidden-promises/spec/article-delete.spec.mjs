import { ArticleDelete } from '../__src__/article-delete.mjs';

describe('ArticleDelete', () => {
  let article;
  let articleAPI;

  beforeEach(() => {
    articleAPI = jasmine.createSpyObj('article API', ['delete']);
    article = new ArticleDelete(articleAPI);
  });

  it(`should call the articleAPI delete and return the deleted article title`, (done) => {
    // arrange
    articleAPI.delete.and.returnValue(Promise.resolve({id: 1}));
    // act
    article.delete({ id: 1, title: 'the first article' });
    // assert
    setTimeout(() => {
      expect(articleAPI.delete).toHaveBeenCalledOnceWith(1);
      expect(article.deleteResult).toEqual('article deleted: 'the first article'');
      done();
    });
  });

  it(`when the articleAPI delete returns status 404 it should return - already been deleted`, (done) => {
    // arrange
    articleAPI.delete.and.returnValue(Promise.reject({status: 404, message: 'not found'}));
    // act
    article.delete({ id: 1, title: 'the first article' });
    // assert
    setTimeout(() => {
      expect(article.deleteResult).toEqual('It looks like article 'the first article' has already been deleted');
      done();
    });
  });

  it(`should return no article to delete when that's the case`, async () => {
    // arrange
    // act
    article.delete();
    await Promise.resolve();
    // assert
    expect(article.deleteResult).toEqual('no article to delete');
  });
});
