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

  static async getByTread(req, res, next) {
    const { params } = req;
    try {
      const replys = await Reply.findAll({ where: { thread_id: params.id } });
      return res.json({
        message: "Succsess get Data",
        data: replys,
        status: true,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error get Data",
        data: [],
        status: false,
      });
    }
  }
}

module.exports = ReplyController;
