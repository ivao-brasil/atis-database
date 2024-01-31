'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('procedures', {
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
      procedure: {
        type: Sequelize.STRING(10),
        allowNull: false,
        primaryKey: true
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('procedures');
  }
};