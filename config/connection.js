const Sequelize = require('sequelize');
require('dotenv').config();

//allow for sequelize to access .env file with the password and postgres
const sequelize = new Sequelize(
    process.env.BOOKS_DB, 
    process.env.BOOKS_USER,
    process.env.BOOKS_PW,
    {
    host: 'localhost',
    dialect: 'postgres'
    }
)
//export sequelize to other files
module.exports = sequelize;