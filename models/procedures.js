'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Procedures extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Procedures.init({
    airport_icao: DataTypes.STRING(4),
    runway: DataTypes.STRING(4),
    type: DataTypes.ENUM('TAKEOFF', 'LANDING'),
    procedure: DataTypes.STRING(10),
    updated_at: DataTypes.DATE,
    created_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'procedures',
  });
  return Procedures;
};