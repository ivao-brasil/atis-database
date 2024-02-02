'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('airports', {
      airport_icao: {
        type: Sequelize.STRING(4),
        primaryKey: true,
        allowNull: false
      },
      current_atis: {
        type: Sequelize.MEDIUMINT,
        allowNull: true
      },
      mag_variation: {
        type: Sequelize.TININT,
        allowNull: false,
        defaultValue: 0
      },
      remarks: {
        type: Sequelize.STRING,
        allowNull: true
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('airports');
  }
};