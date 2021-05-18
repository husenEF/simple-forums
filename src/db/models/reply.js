'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Reply.init({
    user_id: DataTypes.INTEGER,
    thread_id: DataTypes.INTEGER,
    body: DataTypes.TEXT,
    status: DataTypes.ENUM("active", "deactive")
  }, {
    sequelize,
    modelName: 'Reply',
    underscored: true,
    tableName: "replies",
    paranoid: true,
  });
  return Reply;
};