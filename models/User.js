const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')
const bcrypt = require('bcrypt');


class User extends Model {
    // Validates the password
    checkPassword(loginPw) {
      return bcrypt.compareSync(loginPw, this.password);
    }
  };
// Definiton for User model 
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        name:{ 
            type: DataTypes.STRING,
            allowNull: false,
        },
        // last_name:{
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true,
            },
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6],
            },
        },
        read: {
          type: DataTypes.STRING,
        },
        BookClub_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'BookClub',
                key: 'id',
            },
        },
        // Book_id:{
        // type: DataTypes.INTEGER,
        // references: {
        //     model: 'Book',
        //     key: 'id',
        //     },
        // },
    },
    {
        hooks: {
            // Hashes the users password before saving it to the DB
          async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
          },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'User',
      }
    );
    
    module.exports = User;