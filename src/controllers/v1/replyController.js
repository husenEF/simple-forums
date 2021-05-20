const { Reply } = require("../../db/models");
class ReplyController {
  static async create(req, res, next) {
    const { user, body } = req;
    try {
      const reply = await Reply.create({
        user_id: user.id,
        ...body,
      });

      return res.status(201).json({
        message: "succes Save reply",
        status: true,
        data: reply,
      });
    } catch (error) {
      
      if (error.name === "SequelizeForeignKeyConstraintError") {
        return res.status(404).json({
          message: "Thread not found",
          status: false,
          data: [],
        });
      }
      return res.status(500).json({
        message: error.message,
        status: false,
        data: [],
      });
    }
  }
  static async update() {}
  static async delete() {}
}

module.exports = ReplyController;
