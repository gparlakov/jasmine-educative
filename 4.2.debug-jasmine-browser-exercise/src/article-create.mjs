import { ArticleAPI } from './article-api.mjs';

export class ArticleCreate {
  /** @type {ArticleAPI} */
  articleAPI;

  /**
   * @param { ArticleAPI } article the article api
   */
  constructor(articleApi) {
    this.articleAPI = articleApi;
  }

  create(title, content) {
    if (typeof title === 'string' && typeof content === 'string') {
      this.articleAPI.create(title, content);
      return `article created: '${title}' with content '${content}'`;
    }

    return `expected string title and content but recived title: '${title}' content: '${content}'`;
  }
}
