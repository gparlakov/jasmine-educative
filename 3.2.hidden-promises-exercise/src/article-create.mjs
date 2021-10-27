import { ArticleAPI } from './article-api.mjs';
export class ArticleCreate {
  /** @type {ArticleAPI} */
  articleAPI;

  /** @type {string} */
  createResult;

  /**
   * @param { ArticleAPI } article the article api
   */
  constructor(articleApi) {
    this.articleAPI = articleApi;
  }

  create(title, content) {
    this.createResult = undefined;
    if (typeof title === 'string' && typeof content === 'string') {
      this.articleAPI
        .create(title, content)
        .then(() => (this.createResult = `article created: '${title}' with content '${content}'`))
        .catch((e) => {
          if (e && e.status === 409) {
            this.createResult = `it appears that an article with that title '${title}' already exists`;
          } else {
            this.createResult = `failed creating article ${title} - please try again later`;
          }
        });
    } else {
      this.createResult = `expected string title and content but received title: '${title}' content: '${content}'`;
    }
  }
}
