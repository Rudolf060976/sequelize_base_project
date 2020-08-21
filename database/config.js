//const fs = require('fs');
require('custom-env').env(true,__dirname + './../');

module.exports = {
  development: {
    username: process.env.DEV_DB_USERNAME,
    password: process.env.DEV_DB_PASSWORD,
    database: process.env.DEV_DB_DATABASE,
    host: process.env.DEV_DB_HOST,
    port: process.env.DEV_DB_PORT,
    dialect: process.env.DEV_DB_DIALECT,
    dialectOptions: {
      bigNumberStrings: true
    },
    seederStorage: 'sequelize' // WILL STORE ALL EXECUTED SEEDS IN THE DATABASE, IN THE TABLE sequelizedata.
  },
  test: {
    username: process.env.TEST_DB_USERNAME,
    password: process.env.TEST_DB_PASSWORD,
    database: process.env.TEST_DB_DATABASE,
    host: process.env.TEST_DB_HOST,
    port: process.env.TEST_DB_PORT,
    dialect: process.env.TEST_DB_DIALECT,
    dialectOptions: {
      bigNumberStrings: true
    },
    seederStorage: 'sequelize' // WILL STORE ALL EXECUTED SEEDS IN THE DATABASE, IN THE TABLE sequelizedata.
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    port: process.env.PROD_DB_PORT,
    dialect: 'mysql',
    /*
    dialectOptions: {
      bigNumberStrings: true,
      ssl: {
        ca: fs.readFileSync(__dirname + '/mysql-ca-master.crt')
      }
    } */
    seederStorage: 'sequelize' // WILL STORE ALL EXECUTED SEEDS IN THE DATABASE, IN THE TABLE sequelizeData.
  }
};