import { ArticleComponent } from '../__src__/article.component.mjs';

describe('ArticleComponent', () => {
  let component;
  let articleAPI;
  let userMessenger;

  beforeEach(() => {
    articleAPI = jasmine.createSpyObj('article API', {
      get: Promise.resolve({ id: 1, title: 'first', content: 'article' }),
    });
    userMessenger = jasmine.createSpyObj('userMessenger', ['info', 'error']);
    component = new ArticleComponent(articleAPI, userMessenger);
  });

  it(`when initialized it should call the articleAPI get and assign the result to the article property`, async () => {
    // arrange
    component.articleId = 1;
    // act
    await component.afterComponentInitialize();
    // assert
    expect(articleAPI.get).toHaveBeenCalledOnceWith(1);
    expect(component.article).toEqual(jasmine.objectContaining({ id: 1 }));
  });

  it(`when initialized it should call the articleAPI get and inform user upon article fetch failed`, async () => {
    // arrange
    component.articleId = 1;
    articleAPI.get.and.returnValue(Promise.reject('error'));
    // act
    await component.afterComponentInitialize();
    // assert
    expect(userMessenger.error).toHaveBeenCalledOnceWith('Could not fetch article id: "1". Please try again.');
  });

  it(`when initialized it should set loading to true and back to false after the article response arrives`, async () => {
    // arrange
    articleAPI.get.and.returnValue(Promise.resolve({ id: 1 }));
    component.articleId = 1;
    // act
    const initPromise = component.afterComponentInitialize();
    // assert
    expect(component.loading).toBe(true);
    await initPromise;
    expect(component.loading).toBe(false);
  });

  it(`when initialized it should set loading to true and back to false even after article fetch fails`, async () => {
    // arrange
    articleAPI.get.and.returnValue(Promise.reject({ message: 'error' }));
    component.articleId = 1;
    // act
    const initPromise = component.afterComponentInitialize();
    // assert
    expect(component.loading).toBe(true);
    await initPromise;
    expect(component.loading).toBe(false);
  });

  it(`when destroyed it should not set the article property`, async () => {
    // arrange
    component.articleId = 1;
    articleAPI.get.and.returnValue(Promise.resolve({id: 1, title: 'will not be shown to user because the component was destroyed'}));
    const initPromise = component.afterComponentInitialize();
    // act
    component.beforeComponentDestroy();
    await initPromise;
    // assert
    expect(component.article).toBeUndefined();
  });

  it(`when destroyed it should not inform user upon article fetch failed`, async () => {
    // arrange
    component.articleId = 1;
    articleAPI.get.and.returnValue(Promise.reject('error'));
    const initPromise = component.afterComponentInitialize();
    // act
    component.beforeComponentDestroy();
    await initPromise;
    // assert
    expect(userMessenger.error).not.toHaveBeenCalledOnceWith('Could not fetch article id: "1". Please try again.');
  });
});
