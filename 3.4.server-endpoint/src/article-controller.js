class ArticleController {
  db;

  constructor(db) {
    this.db = db;
  }

  async get(id) {
    try {
      const a = await this.db.collection('Article').findOne({ id: id });
      return a;
    } catch (e) {
      throw { status: 'not found', message: `Article with id "${id}" was not found.` };
    }
  }
}

exports.ArticleApiController = ArticleController;
