import { ArticleCreate } from '../__src__/article-create.mjs';

describe('ArticleCreate', () => {
  let article;
  let articleAPI;

  beforeEach(() => {
    articleAPI = jasmine.createSpyObj('article API', ['create']);
    article = new ArticleCreate(articleAPI);
  });

  it(`should call the articleAPI create and return the created article title and content`, (done) => {
    pending('call create with a name and a title and assert expected call and return value');
    // arrange
    // act
    // assert
  });

  it(`when the API returns a 409 Conflict it should advise caller such a title already exists`, (done) => {
    pending(
      'make sure the create returns a rejected promise with a status 409 and assert the return string is as expected'
    );

    // arrange
    // act
    // assert
  });

  it(`when the API returns an error it should advise caller of unknown error`, (done) => {
    pending(
      'make sure the create returns a rejected promise with a 500 (or any non-409) status and assert the return string is as expected'
    );
    // arrange
    // act
    // assert
  });

  it(`should return what was expected and what was received when missing parameters or not string`, () => {
    pending('call create without a name and with a title and assert expected return value. Notice theres no need for done');
    // arrange
    // act
    // assert
  });
});
