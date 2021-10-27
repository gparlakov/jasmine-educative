export class ArticleComponent {
  articleId; // or props.articleId

  article;
  loading;
  destroyed;

  articleAPI;
  userMessenger;

  constructor(articleApi, userMessenger) {
    this.articleAPI = articleApi;
    this.userMessenger = userMessenger;
  }

  async afterComponentInitialize() {
    this.loading = true;
    try {
      const article = await this.articleAPI.get(this.articleId);
      console.log('--- got article', article);
      if(!this.destroyed) {
        this.article = article;
      }
    } catch {
      if(!this.destroyed) {
        this.userMessenger.error(`Could not fetch article id: '${this.articleId}'. Please try again.`);
      }
    }
    this.loading = false;
  }

  beforeComponentDestroy() {
    this.destroyed = true;
    this.article = undefined;
  }
}
