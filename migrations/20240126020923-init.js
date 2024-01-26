'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('params', {
      airport_icao: {
        type: Sequelize.STRING(4),
        primaryKey: true,
        allowNull: false,
      },
      runway: {
        type: Sequelize.STRING(3),
        primaryKey: true,
        allowNull: false,
      },
      type: {
        type: Sequelize.ENUM('TAKEOFF', 'LANDING'),
        allowNull: false,
        primaryKey: true
      },
      param: {
          type: 'VARCHAR(100)',
          allowNull: false
      }
    }, {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('params');
  }
};
