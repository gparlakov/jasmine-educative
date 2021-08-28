```js
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
    expect(result).toEqual('article deleted: "the first article"');
  });

  it(`should return no article to delete when that's the case`, () => {
    // arrange
    // act
    const result = article.delete();
    // assert
    expect(result).toEqual('no article to delete');
  });
});
```


### Test breakdown

Looking at the `spec/article-delete.spec.mjs` file we have:
 - ```js
   import { ArticleDelete } from '../__src__/article-delete.mjs';

   describe('ArticleDelete', () => {
   ```
   we start with `import`ing the `ArticleDelete` class and declaring a test suite for it `describe('ArticleDelete', () => {`
 - ```js
    let article;
    let articleAPI;

    beforeEach(() => {
      articleAPI = jasmine.createSpyObj('article API', ['delete']);
      article = new ArticleDelete(articleAPI);
    });
   ```
   knowing that we need an instance of the `ArticleAPI` we create a spy object with a spy on the `delete` method as that's the only method we use in the logic of `ArticleDelete` class. Then in the next line, we instantiate the `ArticleDelete` instance
