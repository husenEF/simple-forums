// const db = require("./../../db/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const sequelize = require("sequelize");
const saltRounds = 10;
// const t = await sequelize.Transaction();
// const User = require("../../")
const { User } = require("../../db/models");

class authController {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (user) {
        const jwt_secret = process.env.JWT_SECRET;
        const isPasswordMatch = bcrypt.compareSync(password, user.password);
        if (isPasswordMatch) {
          const token = jwt.sign(
            {
              username: user.username,
              email: user.email,
              id: user.id,
              role: user.role,
              status: user.status,
            },
            jwt_secret,
            { expiresIn: "10h", issuer: "bebasdeh" }
          );
          user.password = undefined;
          return res.status(200).json({
            status: true,
            message: "success login",
            data: { user, token },
          });
        } else {
          throw new Error("password wrong !");
        }
      } else {
        throw new Error("email not found !");
      }
    } catch (error) {
      res.status(401).json({
        status: false,
        message: error.message,
        data: [],
      });
    }
  }

  static async register(req, res, next) {
    const { body } = req;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(body.password, salt);
    console.log({ body, hash });
    try {
      const user = await User.create({
        username: body.name,
        email: body.email,
        status: "deactive",
        role: "member",
        password: hash,
      });
      return res.json({
        data: user,
        message: "succes create data",
        status: true,
      });
    } catch (e) {
      const errorMessage = e.errors.map((e) => e.message);
      return res.json({
        data: [],
        message: errorMessage[0],
        status: false,
      });
    }
  }

  static test(req, res, next) {
    res.json({
      msg: "auth test",
    });
  }
}

module.exports = authController;
