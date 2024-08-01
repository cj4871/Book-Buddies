const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User_Club extends Model {
}

User_Club.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },  
    club_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
{
  sequelize,
  modelName: 'Book',
  timestamps: false,
  }
);

module.exports = User_Club;