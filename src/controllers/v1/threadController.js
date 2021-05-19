const db = require("../../db/models");

class ThreadController {
  static async create(req, res, next) {
    try {
      const user_id = req.user.id;
      req.body.user_id = user_id;
      const thread = await db.Thread.create(req.body);
      if (thread) {
        return res.json({
          status: true,
          message: "success retrieve data",
          data: thread,
        });
      }
    } catch (error) {
      res.status(500).json({
        status: false,
        message: error.message,
        data: [],
      });
    }
  }
}

module.exports = ThreadController;
