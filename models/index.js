'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const db = {};

const sequelize = new Sequelize(process.env.DATABASE ?? 'brivao_atis', process.env.DB_USERNAME ?? 'root', process.env.DB_PASSWORD ?? 'root', {
  host: process.env.DB_HOST ?? 'localhost',
  port: process.env.DB_PORT ?? 3306,
  dialect: process.env.DB_CONNECTION ?? 'mariadb',
  logging: !!process.env.DB_LOGGING ?? false,
  dialectOptions: {
    decimalNumbers: true
  },
  timezone: 'Etc/GMT-3',
});

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

module.exports = db;
