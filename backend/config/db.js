// backend/config/db.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    dialect: 'mssql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    dialectOptions: {
      options: {
        instanceName: 'SQLEXPRESS01',  // nombre de la instancia en SQL Server
        encrypt: true,
        trustServerCertificate: true,
        multipleActiveResultSets: false
      }
    },
    logging: false
  }
);

module.exports = sequelize;
