const { unlink } = require("fs");
const { Forum, sequelize } = require("../../db/models");

class ForumController {
  static async allList(req, res, next) {
    // console.log({ req });
    const { params } = req;
    const fid = params.forumId || null;
    console.log({ fid });
    try {
      let forum;
      if (fid !== null) {
        forum = await Forum.findByPk(fid);
      } else {
        forum = await Forum.findAll({
          where: {
            status: "active",
          },
        });
      }
      return res.status(200).json({
        message: "succes get forum list",
        status: true,
        data: forum,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: error.message,
        data: [],
      });
    }
  }

  static async create(req, res, next) {
    const { body, user } = req;

    try {
      const fourm = await Forum.create({
        title: body.title,
        description: body.description,
        cretor: user.id,
      });
      return res.status(201).json({
        message: "success create forum",
        data: fourm,
        status: true,
      });
    } catch (error) {}
  }

  static async upload(req, res, next) {
    const { params, file } = req;
    // console.log({ params });
    try {
      if (!params.forumid) {
        unlink(file.path, (e) => {
          if (e) throw new e();
        });
        throw new Error("Forum id harus ada");
      }

      const [status, data] = await Forum.update(
        { thumbnail: file.filename },
        { where: { id: params.forumid }, returning: true }
      );
      if (!status) {
        unlink(file.path, (e) => {
          if (e) throw new e();
        });
        throw new Error("update error");
      }
      return res.status(201).json({
        message: "Success update forum",
        status: true,
        data: data[0],
      });
    } catch (error) {
      return res.status(404).json({
        message: error.message,
        status: false,
        data: [],
      });
    }
  }
}

module.exports = ForumController;
