import { ArticleAPI } from './article-api-sync.mjs';

export class ArticleDelete {
  /** @type {ArticleAPI} */
  articleAPI;

  /**
   * @param { ArticleAPI } article the article api
   */
  constructor(articleApi) {
    this.articleAPI = articleApi;
  }

  delete(a) {
    if (a != null && a.id != null) {
      this.articleAPI.delete(a.id);
      return `article deleted: "${a.title}"`;
    }

    return 'no article to delete';
  }
}
