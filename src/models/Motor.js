const { DataTypes } = require('sequelize');
const sequelize = require('../../database/database');

const Motor = sequelize.define('Motor', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    potenciamaxima: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tecnologia: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'motor',
    timestamps: false
});

module.exports = Motor;
