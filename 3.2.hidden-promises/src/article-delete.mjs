import { ArticleAPI } from './article-api.mjs';

export class ArticleDelete {
  /** @type {ArticleAPI} */
  articleAPI;

  /** @type {string} */
  deleteResult;

  /**
   * @param { ArticleAPI } article the article api
   */
  constructor(articleApi) {
    this.articleAPI = articleApi;
  }

  delete(a) {
    this.deleteResult = undefined;
    if (a != null && a.id != null) {
      this.articleAPI
        .delete(a.id)
        .then(() => (this.deleteResult = `article deleted: "${a.title}"`))
        .catch((e) => {
          if (e && e.status === 404) {
            this.deleteResult = `It looks like article "${a.title}" has alreay been deleted`;
          } else {
            this.deleteResult = `Unknown error trying to delete "${a.title}". Please try again.`;
          }
        });
    } else {
      this.deleteResult = 'no article to delete';
    }
  }
}
