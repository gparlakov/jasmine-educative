import { ArticleDelete } from '../__src__/article-delete.mjs';

describe('ArticleDelete', () => {
  let article;
  let articleAPI;

  beforeEach(() => {
    articleAPI = jasmine.createSpyObj('article API', ['delete']);
    article = new ArticleDelete(articleAPI);
  });

  it(`should call the articleAPI delete and return the deleted article title`, async () => {
    // arrange
    articleAPI.delete.and.returnValue(Promise.resolve({id: 1}));
    // act
    const result = await article.delete({ id: 1, title: 'the first article' });
    // assert
    expect(articleAPI.delete).toHaveBeenCalledOnceWith(1);
    expect(result).toEqual('article deleted: 'the first article'');
  });

  it(`when the articleAPI delete returns status 404 it should return - already been deleted`, async () => {
    // arrange
    articleAPI.delete.and.returnValue(Promise.reject({status: 404, message: 'not found'}));
    // act
    const result = await article.delete({ id: 1, title: 'the first article' });
    // assert
    expect(result).toEqual('It looks like article 'the first article' has already been deleted');
  });

  it(`should return no article to delete when that's the case`, async () => {
    // arrange
    // act
    const result = await article.delete();
    // assert
    expect(result).toEqual('no article to delete');
  });
});
