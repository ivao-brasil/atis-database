'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Atis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Atis.init({
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
  });

  return Atis;
};