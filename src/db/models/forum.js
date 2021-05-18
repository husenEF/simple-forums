'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Forum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Forum.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    thumbnail: DataTypes.TEXT,
    status: DataTypes.ENUM
  }, {
    sequelize,
    modelName: 'Forum',
    underscored: true,
    paranoid: true
  });
  return Forum;
};