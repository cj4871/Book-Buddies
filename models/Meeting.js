const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Meeting extends Model {}

//Definiton for Meeting model
Meeting.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    book_chapter: {
      type: DataTypes.INTEGER,
    },

    // BookClub_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: 'BookClub',
    //         key: 'id',
    //     },
    // },
    // Book_id:{
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: 'book',
    //         key: 'id',
    //     },
    // },
  },
  {
    sequelize,
    modelName: "Meeting",
    freezeTableName: true,
    underscored: true,
    timestamps: true,
  }
);

module.exports = Meeting;
