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
      throw { status: 'not found', message: `Article with id '${id}' was not found.` };
    }
  }

  async delete(id, etag) {
    try {
      const article = await this.get(id);
      if (article.version === etag) {
        await this.db.collection('Article').delete({ id: id });
      } else {
        throw { status: 'version mismatch', message: `Article with id '${id}' seems to have been updated and client and server versions do not match.`}
      }
    } catch (e) {
      if (e && typeof e.status === 'string') {
        throw e;
      }

      throw { status: 'delete failed', message: `Article with id '${id}' could not be deleted.` };
    }
  }
}

exports.ArticleApiController = ArticleController;
