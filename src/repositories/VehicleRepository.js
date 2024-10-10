const Vehicle = require('../models/Vehicle');

class VehicleRepository {
    // Obtener todos los vehículos
    async getAll() {
        return await Vehicle.findAll();
    }

    // Obtener un vehículo por ID
    async getById(id) {
        return await Vehicle.findByPk(id);
    }

    // Crear un nuevo vehículo
async create(vehicleData) {
    // Asegúrate de que vehicleData tenga las propiedades correctas
    return await Vehicle.create({
        marca: vehicleData.marca, // Cambia 'Marca' a 'marca'
        color: vehicleData.color, // Cambia 'Color' a 'color'
        fechaensamblaje: vehicleData.fechaensamblaje, // Cambia 'FechaEnsamblaje' a 'fechaEnsamblaje'
        numeroensamblaje: vehicleData.numeroensamblaje, // Cambia 'NumeroEnsamblaje' a 'numeroEnsamblaje'
        chasisid: vehicleData.chasisid, // Cambia 'ChasisId' a 'chasisId'
        motorid: vehicleData.motorid, // Cambia 'MotorId' a 'motorId'
        cojineraid: vehicleData.cojineraid // Cambia 'CojineraId' a 'cojineraId'
    });
    }

    // Actualizar un vehículo
    async update(id, vehicleData) {
        const vehicle = await Vehicle.findByPk(id);
        if (vehicle) {
            return await vehicle.update(vehicleData);
        }
        return null;
    }

    // Eliminar un vehículo
    async delete(id) {
        const vehicle = await Vehicle.findByPk(id);
        if (vehicle) {
            await vehicle.destroy();
            return true;
        }
        return false;
    }
}

module.exports = new VehicleRepository();
