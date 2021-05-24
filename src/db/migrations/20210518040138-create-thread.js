'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('threads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      forum_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "forums",
        },
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
        },
      },
      title: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.ENUM("active", "deactive"),
        defaultValue: "deactive"
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        type: Sequelize.DATE
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('threads');
  }
};