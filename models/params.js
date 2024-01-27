'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Params', {
    airport_icao: {
      type: DataTypes.STRING(4),
      primaryKey: true,
      allowNull: false,
    },
    runway: {
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('TAKEOFF', 'LANDING'),
      allowNull: false,
      primaryKey: true
    },
    param: {
        type: 'VARCHAR(100)',
        allowNull: false
    }
  }, {
    tableName: "params",
  });
};