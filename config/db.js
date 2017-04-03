const mysql = require('mysql');
const tedious = require('tedious');
const Sequelize = require('Sequelize');

const credentials =  require("./env/dev.json");

const DB_NAME = process.env.DATABASE_NAME || credentials.databaseName;
const DB_USERNAME = process.env.DATABASE_USERNAME || credentials.username;
const DB_PASSWORD = process.env.DATABASE_PASSWORD || credentials.password;
const DB_HOST = process.env.DATABASE_HOST || credentials.host;
const DB_DIALECT = process.env.DATABASE_DIALECT || credentials.dialect;
const DB_PORT = process.env.DATABASE_PORT || credentials.port || 1433;


// Informações da conexão
const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT,
    port: DB_PORT,
    timezone: "-03:00",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    dialectOptions: {
        encrypt: true
    }
});

sequelize.sync();


module.exports = { sequelize, Sequelize };