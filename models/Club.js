const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Club extends Model {}

Club.init(
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
    // meetings_id: {
    //   type: DataTypes.INTEGER
    // }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "club",
  }
);

module.exports = Club;
