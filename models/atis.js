'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  let Atis = sequelize.define("Atis", {
    general_id: {
      type: DataTypes.MEDIUMINT,
      primaryKey: true,
      autoIncrement: true
    },
    airport_icao: {
      type: DataTypes.STRING(4),
      allowNull: false,
      references: {
        model: 'airports',
        key: 'airport_icao'
      }
    },
    char_id: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: "A"
    },
    runways: {
      type: DataTypes.JSON,
      allowNull: false
    },
    remarks: {
      type: DataTypes.STRING,
      allowNull: true
    },
    digital_atis: {
      type: DataTypes.STRING,
      allowNull: false
    },
    metar: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'atis',
    createdAt: "created_at",
    updatedAt: "updated_at"
  });

  Atis.associate = (models) => {
    Atis.belongsTo(models.Airports, { foreignKey: 'airport_icao', targetKey: 'airport_icao'})
  }

  return Atis;
};