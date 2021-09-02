import { ArticleCreate } from '../__src__/article-create.mjs';

describe('ArticleCreate', () => {
  let article;
  let articleAPI;

  beforeEach(() => {
    articleAPI = jasmine.createSpyObj('article API', ['create']);
    article = new ArticleCreate(articleAPI);
  });

  it(`should call the articleAPI create and return the created article title and content`, async () => {
    pending('call create with a name and a title and assert expected call and return value');
    // arrange
    // act
    // assert
  });

  it(`when the API returns a 409 Conflict it should advise caller such a title already exists`, async () => {
    pending('make sure the create returns a rejected promise with a status 409 and assert the return string is as expected');
    // arrange
    // act
    // assert
  });

  it(`should return what was expected and what was received when missing parameters or not string`, async () => {
    pending('call create without a name and with a title and assert expected return value');
    // arrange
    // act
    // assert
  });
});
