'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  let Airport = sequelize.define("Airport", {
    airport_icao: {
      type: DataTypes.STRING(4),
      primaryKey: true,
      allowNull: false,
    },
    current_atis: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    },
    mag_variation: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    remarks: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'airports',
    createdAt: "created_at",
    updatedAt: "updated_at"
  });

  Airport.associate = (models) => {
    Airport.hasOne(models.Atis, { foreignKey: 'current_atis', targetKey: 'general_id'})
  }

  return Airport;
};