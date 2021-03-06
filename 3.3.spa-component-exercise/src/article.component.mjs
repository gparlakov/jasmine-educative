export class ArticleComponent {
  articleId; // or props.articleId

  article;
  loading;
  destroyed;

  articleAPI;
  userMessenger;

  showDeleteArticleConfirmationDialog;

  constructor(articleApi, userMessenger) {
    this.articleAPI = articleApi;
    this.userMessenger = userMessenger;
  }

  async afterComponentInitialize() {
    this.loading = true;
    try {
      const article = await this.articleAPI.get(this.articleId);
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

    this.showDeleteArticleConfirmationDialog = false;
  }

  onDeleteArticle() {
    this.showDeleteArticleConfirmationDialog = true;
  }

  async onDeleteArticleConfirm() {
    this.showDeleteArticleConfirmationDialog = false;
    await this.articleAPI.delete(this.articleId);
    this.userMessenger.info('Article successfully deleted');
  }

  onDeleteArticleCancel() {
    this.showDeleteArticleConfirmationDialog = false;
  }
}
