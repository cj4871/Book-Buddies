const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book_Club extends Model {
}

Book_Club.init(
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
    book_id: {
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

module.exports = Book_Club;