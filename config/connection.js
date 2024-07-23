require('dotenv').config();
const Sequelize = require('sequelize');
const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(process.env.BOOKS_DB, process.env.BOOKS_USER, process.env.BOOKS_PW, {
      host: 'localhost',
      dialect: 'postgres',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
module.exports = sequelize;