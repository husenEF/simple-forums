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
    const { body } = req;

    try {
      const fourm = await Forum.create({
        title: body.title,
        description: body.description,
      });
      return res.status(201).json({
        message: "success create forum",
        data: fourm,
        status: true,
      });
    } catch (error) {}
  }
}

module.exports = ForumController;
