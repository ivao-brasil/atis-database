'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  let Procedures = sequelize.define("Procedures",{
    airport_icao: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    runway: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    procedure: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'procedures',
    createdAt: "created_at",
    updatedAt: "updated_at"
  });
  return Procedures;
};