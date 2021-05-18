'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ForumModerator extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ForumModerator.init({
    user_id: DataTypes.INTEGER,
    forum_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ForumModerator',
    underscored: true,
    tableName: "forum_moderators",
    paranoid: true
  });
  return ForumModerator;
};