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
    meeting_topic: {
      type: DataTypes.STRING,
    },

    // Club_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: 'Club',
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
