const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('videogamegenre', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }
    }, { timestamps: false });
};