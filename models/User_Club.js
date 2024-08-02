const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User_Club extends Model {
}

User_Club.init(
  {
    id: {
      type: DataTypes.INTEGER,
      // defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },  
    clubId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'club',
        key: 'id'
      }
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'user_club'
  }
);

module.exports = User_Club;