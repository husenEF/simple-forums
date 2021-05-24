"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      role: DataTypes.ENUM("admin", "moderator", "member"),
      status: DataTypes.ENUM("active", "deactive"),
      password: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "User",
      underscored: true,
      paranoid: true,
      tableName: "users",
    }
  );
  return User;
};
