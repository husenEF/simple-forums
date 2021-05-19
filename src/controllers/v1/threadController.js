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

  static async getById(req, res, next) {
    try {
      const threads = await db.Thread.findOne({
        where: { id: req.params.id },
      });
      return res.json({
        status: true,
        message: "success retrieve threads",
        data: threads,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: error.message,
        data: [],
      });
    }
  }

  static async list(req, res, next) {
    try {
      const threads = await db.Thread.findAll();
      return res.json({
        status: true,
        message: "success retrieve all threads",
        data: threads,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: error.message,
        data: [],
      });
    }
  }

  static async threadByForum(req, res, next) {
    try {
      const threads = await db.Thread.findAll({
        where: { forum_id: req.params.id },
      });
      return res.json({
        status: true,
        message: "success retrieve all threads",
        data: threads,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: error.message,
        data: [],
      });
    }
  }

  static async delete(req, res, next) {
    try {
      const threads = await db.Thread.destroy({ where: { id: req.params.id } });
      if (threads) {
        return res.json({
          status: true,
          message: "success delete threads",
          data: [],
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

  static async update(req, res, next) {
    try {
      const [status, thread] = await db.Thread.update(req.body, {
        where: { id: req.params.id },
        returning: true,
      });
      if (status) {
        return res.json({
          status: true,
          message: "success update threads",
          data: thread,
        });
      } else {
          throw new Error("no field updated !")
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
