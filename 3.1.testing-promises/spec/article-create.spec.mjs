import { ArticleCreate } from '../__src__/article-create.mjs';

describe('ArticleCreate', () => {
  let article;
  let articleAPI;

  beforeEach(() => {
    articleAPI = jasmine.createSpyObj('article API', ['create']);
    article = new ArticleCreate(articleAPI);
  });

  it(`should call the articleAPI create and return the created article title and content`, () => {
    pending('call create with a name and a title and assert expected call and return value')
    // arrange
    // act
    // assert
  });

  it(`should return what was expected and what was received when missing parameters or not string`, () => {
    pending('call create without a name and with a title and assert expected return value')
    // arrange
    // act
    // assert
  });
});
