const db = require('./../../db/models')
class authController {
  static async login(req, res, next) {
    const {username, password} = req.body
    const user = db.User.findOne()
  }
  static async register(req, res, next) {}
}

module.exports = authController;
