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
    modelName: 'procedures',
    createdAt: "created_at",
    updatedAt: "updated_at"
  });
  return Procedures;
};