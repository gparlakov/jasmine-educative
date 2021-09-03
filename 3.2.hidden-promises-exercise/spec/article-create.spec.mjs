import { ArticleCreate } from '../__src__/article-create.mjs';

describe('ArticleCreate', () => {
  let article;
  let articleAPI;

  beforeEach(() => {
    articleAPI = jasmine.createSpyObj('article API', ['create']);
    article = new ArticleCreate(articleAPI);
  });

  pending('call create with a name and a title and assert expected call and return value');

  pending(
    'make sure the create returns a rejected promise with a status 409 and assert the return string is as expected'
  );

  pending('call create without a name and with a title and assert expected return value');

  it(`should call the articleAPI create and return the created article title and content`, (done) => {
    // arrange
    articleAPI.create.and.returnValue(Promise.resolve({ id: 1 }));
    // act
    article.create('title', 'content');
    // assert
    setTimeout(() => {
      expect(articleAPI.create).toHaveBeenCalledOnceWith('title', 'content');
      expect(article.createResult).toEqual('article created: "title" with content "content"');
      done();
    });
  });

  it(`when the API returns a 409 Conflict it should advise caller such a title already exists`, (done) => {
    // arrange
    articleAPI.create.and.returnValue(Promise.reject({ status: 409 }));
    // act
    article.create('title', 'content');
    // assert
    setTimeout(() => {
      expect(articleAPI.create).toHaveBeenCalledOnceWith('title', 'content');
      expect(article.createResult).toEqual(`it appears that an article with that title "title" already exists`);
      done();
    });
  });

  it(`when the API returns an error it should advise caller of unknown error`, (done) => {
    // arrange
    articleAPI.create.and.returnValue(Promise.reject({ status: 500 }));
    // act
    article.create('title', 'content');
    // assert
    setTimeout(() => {
      expect(articleAPI.create).toHaveBeenCalledOnceWith('title', 'content');
      expect(article.createResult).toEqual(`failed creating article title - please try again later`);
      done();
    });
  });

  it(`should return what was expected and what was received when missing parameters or not string`, async () => {
    // arrange
    // act
    article.create('');
    // assert
    expect(article.createResult).toEqual(
      `expected string title and content but received title: "" content: "undefined"`
    );
  });
});
