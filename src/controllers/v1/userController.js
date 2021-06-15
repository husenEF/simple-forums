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
      const id = req.params.id;
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

  static async delete(req, res) {
    try {
      const id = req.params.id;
      const del = await User.destroy({
        where: {
          id,
        },
      });

      if (!del) throw new Error("error delete data");
      res.status(201).json({
        status: true,
        message: "Deleted succes",
        data: [],
      });
    } catch (error) {
      // console.log({ error });
      res.status(500).json({
        status: false,
        message: error.message,
        data: [],
      });
    }
  }

  static async update(req, res) {
    const {
      body,
      params: { id },
    } = req;
    const { status, role } = body;
    // console.log({ status, role, id });
    try {
      if (
        (status === undefined || status === "") &&
        (role === undefined || role === "")
      ) {
        throw new Error("Please fill status or role");
      }

      const update = await User.update(body, {
        where: {
          id,
        },
        returning: true,
        // plain: true
      }).then((res) => {
        // console.log({ res: res[1][0] });
        const user = res[1][0];
        user.password = undefined;
        return user;
      });

      return res.status(201).json({
        status: true,
        message: "Update succes",
        data: update,
      });
    } catch (error) {
      return res.status(400).json({
        status: false,
        message: error.message,
        data: [],
      });
    }
    // return res.json({ body });
  }
}

module.exports = UserController;
