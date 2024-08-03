const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Club = require("./Club");


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
    club_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'club',
            key: 'id',
        },
    },
  },
  {
    sequelize,
    modelName: "meeting",
    freezeTableName: true,
    underscored: true,
    timestamps: false,
  }
);

module.exports = Meeting;
