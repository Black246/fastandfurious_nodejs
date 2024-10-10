const { DataTypes } = require('sequelize');
const sequelize = require('../../database/database');

const Chasis = sequelize.define('Chasis', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    numeroejes: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tipotransmision: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'chasis', // Nombre de la tabla en la base de datos
    timestamps: false
});

module.exports = Chasis;
