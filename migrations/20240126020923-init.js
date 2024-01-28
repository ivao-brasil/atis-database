'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('runway_params', {
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
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      param: {
          type: Sequelize.JSON,
          allowNull: false
      },
      magnetic_hdg: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: false
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
    }, {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('params');
  }
};
