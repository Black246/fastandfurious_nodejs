const { DataTypes } = require('sequelize');
const sequelize = require('../../database/database');

const Cojinera = sequelize.define('Cojinera', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    material: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'cojinera',
    timestamps: false
});

module.exports = Cojinera;
