"use strict";
const bcrypt = require("bcrypt");
const saltRounds = parseInt(process.env.SALTROUNDS);
const salt = bcrypt.genSaltSync(saltRounds);
const hash = bcrypt.hashSync("password", salt);
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        username: "admin",
        status: "active",
        role: "admin",
        password: hash,
        email: "admin@mail.com",
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        username: "member",
        status: "active",
        role: "member",
        password: hash,
        email: "member@mail.com",
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        username: "moderator",
        status: "active",
        role: "moderator",
        password: hash,
        email: "moderator@mail.com",
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
