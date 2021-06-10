const { User } = require("../../db/models");

class UserController {
  static async profile(req, res, next) {
    try {
      const id = req.user.id;
      const user = await User.findByPk(id);
      if (user) {
        user.password = undefined;
        return res.json({
          status: true,
          message: "success retrieve data",
          data: user,
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

  static async detail(req, res, next) {
    try {
      const id = req.user.id;
      const user = await User.findByPk(id);
      if (user) {
        user.password = undefined;
        return res.json({
          status: true,
          message: "success retrieve data",
          data: user,
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

  static async list(req, res, next) {
    try {
      const users = await User.findAll({
        attributes: [
          "id",
          "username",
          "email",
          "role",
          "status",
          "createdAt",
          "deletedAt",
        ],
      });
      if (users) {
        return res.json({
          status: true,
          message: "success retrieve data",
          data: users,
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

module.exports = UserController;
