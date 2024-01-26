'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Params extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Params.init({
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
    sequelize,
    modelName: 'params',
  });
  return Params;
};