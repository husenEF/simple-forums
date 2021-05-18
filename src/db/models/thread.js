'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Thread extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Thread.init({
    forum_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    title: DataTypes.TEXT,
    description: DataTypes.TEXT,
    status: DataTypes.ENUM("active", "deactive")
  }, {
    sequelize,
    modelName: 'Thread',
    underscored: true,
    tableName: "threads",
    paranoid: true,
  });
  return Thread;
};