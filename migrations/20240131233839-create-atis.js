'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('atis', {
      general_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.MEDIUMINT
      },
      airport_icao: {
        type: Sequelize.STRING(4),
        allowNull: false,
        references: {
          model: 'airports',
          key: 'airport_icao'
        }
      },
      char_id: {
        type: Sequelize.CHAR,
        allowNull: false,
        defaultValue: "A"
      },
      runways: {
        type: Sequelize.JSON,
        allowNull: false
      },
      remarks: {
        type: Sequelize.STRING,
        allowNull: true
      },
      digital_atis: {
        type: Sequelize.STRING,
        allowNull: false
      },
      metar: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(function() {
      queryInterface.addConstraint('airports', {
        fields: ['current_atis'],
        type: 'foreign key',
        name: 'current_atis_ibfk_1',
        references: {
          table: 'atis',
          field: 'general_id'
        }
      })});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('airports', 'current_atis_ibfk_1');
    await queryInterface.dropTable('atis');
  }
};