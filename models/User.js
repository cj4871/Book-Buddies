const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')
const Book = require('./Book')

class User extends Model {};

Book.init(
    {
        first_name:{
            type: DataTypes.CHAR(50),
            allowNull: false,
        }, 
        last_name:{
            type: DataTypes.CHAR(50),
            allowNull: false,
        }, 
        email:{
            type: DataTypes.CHAR(50),
            allowNull: false,
        }, 
        password:{
            type: DataTypes.CHAR(50),
            allowNull: false,
        },
        book_club_id:{
            type: DataTypes.INTEGER(50),
            allowNull: true,
        },
        book_id:{
            type: DataTypes.INTEGER(50),
            allowNull: true,
        } 
    }
);

module.exports = User;