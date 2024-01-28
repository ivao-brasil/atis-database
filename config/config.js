const fs = require('fs');

module.exports = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_CONNECTION ?? 'mariadb',
        migrationStorageTableName: `${process.env.DB_DATABASE}_migrations`,
        migrationStorageTableSchema: "migrations",
        logging: !!process.env.DB_LOGGING,
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_CONNECTION ?? 'mariadb',
        migrationStorageTableName: `${process.env.DB_DATABASE}_migrations`,
        migrationStorageTableSchema: "migrations",
        logging: !!process.env.DB_LOGGING,
    }
};
