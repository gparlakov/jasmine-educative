import { ArticleDelete } from '../__src__/article-delete.mjs';

describe('ArticleDelete', () => {
  let article;
  let articleAPI;

  beforeEach(() => {
    articleAPI = jasmine.createSpyObj('article API', ['delete']);
    article = new ArticleDelete(articleAPI);
  });

  it(`should call the articleAPI delete and return the deleted article title`, () => {
    // arrange
    // act
    const result = article.delete({ id: 1, title: 'the first article' });
    // assert
    expect(articleAPI.delete).toHaveBeenCalledOnceWith(1);
    expect(result).toEqual('article deleted: 'the first article'');
  });

  it(`should return no article to delete when that's the case`, () => {
    // arrange
    // act
    const result = article.delete();
    // assert
    expect(result).toEqual('no article to delete');
  });
});
