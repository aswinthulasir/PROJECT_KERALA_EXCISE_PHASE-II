const { Sequelize } = require('sequelize');
require ('dotenv').config();

const connection = async () => {
const sequelize = new Sequelize(process.env.DB_database, process.env.DB_user, process.env.DB_password, {
    port: process.env.DB_port,
    host: process.env.DB_host,
    dialect:'postgres'
  });

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = { connection };