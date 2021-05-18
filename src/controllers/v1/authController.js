class authController {
  static async login(req, res, next) {}
  static async register(req, res, next) {}
  static test(req, res, next) {
    res.json({
      msg: "auth test",
    });
  }
}

module.exports = authController;
