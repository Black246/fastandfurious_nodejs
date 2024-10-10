const { DataTypes } = require('sequelize');
const sequelize = require('../../database/database');
const Chasis = require('./Chasis');
const Motor = require('./Motor');
const Cojinera = require('./Cojinera');

const Vehicle = sequelize.define('Vehicle', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fechaensamblaje: {  
        type: DataTypes.DATE,
        allowNull: false
    },
    numeroensamblaje: {  
        type: DataTypes.INTEGER,
        allowNull: false
    },
    chasisid: {
        type: DataTypes.INTEGER,
        references: {
            model: Chasis,
            key: 'id'
        }
    },
    motorid: {
        type: DataTypes.INTEGER,
        references: {
            model: Motor,
            key: 'id'
        }
    },
    cojineraid: {
        type: DataTypes.INTEGER,
        references: {
            model: Cojinera,
            key: 'id'
        }
    }
}, {
    tableName: 'vehicle',
    timestamps: false
});

// Relaciones
Vehicle.belongsTo(Chasis, { foreignKey: 'chasisid' });
Vehicle.belongsTo(Motor, { foreignKey: 'motorid' });
Vehicle.belongsTo(Cojinera, { foreignKey: 'cojineraid' });

module.exports = Vehicle;
