import { ArticleCreate } from '../__src__/article-create.mjs';

describe('ArticleCreate', () => {
  let article;
  let articleAPI;

  beforeEach(() => {
    articleAPI = jasmine.createSpyObj('article API', ['create']);
    article = new ArticleCreate(articleAPI);
  });

  it(`should call the articleAPI create and return the created article title and content`, async () => {
    // pending('call create with a name and a title and assert expected call and return value')
    // arrange
    articleAPI.create.and.returnValue(Promise.resolve({id: 1}));
    // act
    const res = await article.create('My new title', `## Heading

    Paragraph 1 with some content

    ## heading 2

    Paragraph 2 with some more content
    `);
    // assert
    expect(res).toEqual(`article created: "My new title" with content "## Heading

    Paragraph 1 with some content

    ## heading 2

    Paragraph 2 with some more content
    "`)
  });

  it(`when the API returns a 409 Conflict it should advise caller such a title already exists`, async () => {
    // pending('call create without a name and with a title and assert expected return value')

    articleAPI.create.and.returnValue(Promise.reject({status: 409}));
    // act
    const res = await article.create('My new title', 'content');
    // assert
    expect(res).toEqual(`it appears that an article with that title "My new title" already exists`)
  });
  it(`should return what was expected and what was received when missing parameters or not string`, () => {
    pending('call create without a name and with a title and assert expected return value')
    // arrange
    // act
    // assert
  });
});
