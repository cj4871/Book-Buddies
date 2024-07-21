const {Model} = require('sequelize')
const sequelize = require('../config/connection')

class Bookclub extends Model {};

Bookclub.init(
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
        location: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Bookclub',  
    }
);

module.exports = Bookclub;
