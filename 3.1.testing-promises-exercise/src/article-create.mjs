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

  async create(title, content) {
    if (typeof title === 'string' && typeof content === 'string') {
      try {
        await this.articleAPI.create(title, content);
        return `article created: "${title}" with content "${content}"`;
      } catch (e) {
        if (e && e.status === 409) {
          return `it appears that an article with that title "${title}" already exists`
        }

        return `failed creating article ${title} - please try again later`
      }
    }

    return `expected string title and content but recived title: "${title}" content: "${content}"`;
  }
}
