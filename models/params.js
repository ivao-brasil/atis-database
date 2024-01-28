'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('RunwayParams', {
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
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    magneticHdg: {
      name: 'magnetic_hdg',
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false
    },
    param: {
      type: DataTypes.JSON,
      allowNull: false
    }
  }, {
    tableName: "runway_params",
    createdAt: "created_at",
    updatedAt: "updated_at"
  });
};