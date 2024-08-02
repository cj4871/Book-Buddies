const {Model, DataTypes, UUIDV4} = require('sequelize')
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
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            allowNull: false,
            primaryKey: true,
            // autoIncrement: true,
          },
        name:{ 
            type: DataTypes.STRING,
            allowNull: false,
        },
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
        modelName: 'user',
      }
    );
    
    module.exports = User;