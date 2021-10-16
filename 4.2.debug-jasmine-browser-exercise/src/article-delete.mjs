import { ArticleAPI } from './article-api.mjs';

export class ArticleDelete {
  /** @type {ArticleAPI} */
  articleAPI;

  /**
   * @param { ArticleAPI } article the article api
   */
  constructor(articleApi) {
    this.articleAPI = articleApi;
  }

  async delete(a) {
    if (a != null && a.id != null) {
      try {
        await this.articleAPI.delete(a.id);
        return `article deleted: "${a.title}"`;
      } catch (e) {
        if (e && e.status === 404) {
          console.log('---- already been deleted ----' )
          return `It looks like article "${a.title}" has already been deleted`;
        }

        return `Unknown error trying to delete "${a.title}". Please try again.`;
      }
    }

    return 'no article to delete';
  }
}
