'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('params', 'active', {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
    });
  },

  async down (queryInterface) {
    queryInterface.removeColumn('params', 'active');
  }
};
