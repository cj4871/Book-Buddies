const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class BookClub extends Model {}

BookClub.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "BookClub",
  }
);

module.exports = BookClub;
