const db = require("../../db/models");

class UserController {
  static async profile(req, res, next) {
    try {
      const id = req.user.id;
      const user = await db.User.findByPk(id);
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
}

module.exports = UserController;
