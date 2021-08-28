# Unit Testing classes

\- javascript allows for classes

\- what's different when testing classes


In everyday work, we often need to deal with classes ([MDN article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)). Some examples might be
 - a node.js API endpoint handler (server-side)
 - a SPA Component class (client-side)

These often include dependencies that are injected in the constructor and used throughout the methods in the class instance.

We'll look into a class with one dependency and one method that uses that dependency.

## The Article class

What follows is a very simplified example of a class that handles deleting articles in a browser application. It will accept some input and make a request to a server API if conditions are met.

## Class breakdown

The `ArticeDelete` class is relying on a `ArticleAPI` class to make a `DELETE /api/article/:id` call if conditions are met.

- `ArticleAPI` is a class that would implement the server API call. _It is empty as that's outside of the current lesson scope_
- `ArticleDlete` is the main class
  - ```js
    import { ArticleAPI } from './article-api.mjs';
    ```
    importing the ArticleAPI dependency from the adjacent module in the current folder `article-api.mjs`

  - ```js
    export class ArticleDelete {
    ```
    exporting the class to be used in other modules
  - ```js
      /** @type {ArticleAPI} */
      articleAPI;

      /**
       * @param { ArticleAPI } article the article api
       */
      constructor(articleApi) {
        this.articleAPI = articleApi;
      }
    ```
    declaring the `articleAPI` class instance property and populating it when an instance of the class gets constructed. In other words,  constructing an instance of the `ArticleDelete` class will require an instance of `ArticleAPI` class.
  - ```js
      delete(a) {
        if (a != null && a.id != null) {
          this.articleAPI.delete(a.id);
          return `article deleted: "${a.title}"`;
        }

        return 'no article to delete';
      }
    ```
    this method will check if the article has an id and if it has will invoke the method `delete` from the `ArticleAPI` instance which in turn will call the server API.

## Test breakdown

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
   knowing that we need an instance of the `ArticleAPI` we create a spy object with a spy on the `delete` method as that's the only method we use in the logic of `ArticleDelete` class. Then in the next line, we instantiate an `ArticleDelete` instance. These two instances will get renewed `beforeEach` test so that each test executes in isolation from the others and no one test influences the others.

- ```js
  it(`should call the articleAPI delete and return the deleted article title`, () => {
    // arrange
    // act
    const result = article.delete({ id: 1, title: 'the first article' });
    // assert
    expect(articleAPI.delete).toHaveBeenCalledOnceWith(1);
    expect(result).toEqual('article deleted: "the first article"');
  });
  ```
  in the first test run the `article.delete` passing in the expected article object with an `id` and a `title`. Then, we assert that the dependency's `delete` method has been called with the argument expected (`1`) and the result is the expected string (`'article deleted: "the first article"'`)
- ```js
  it(`should return no article to delete when that's the case`, () => {
    // arrange
    // act
    const result = article.delete();
    // assert
    expect(result).toEqual('no article to delete');
  });
  ```
  in the second test we make sure that when the `delete` method is called without an article it will return the expected string - `'no article to delete'`
