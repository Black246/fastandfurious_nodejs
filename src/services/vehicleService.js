const VehicleRepository = require('../repositories/VehicleRepository');

class VehicleService {
    async getAllVehicles() {
        return await VehicleRepository.getAll();
    }

    async getVehicleById(id) {
        return await VehicleRepository.getById(id);
    }

    async assembleVehicle(vehicleData) {
        // Crear el nuevo vehículo
        return await VehicleRepository.create(vehicleData);
    }
    

    async updateVehicle(id, vehicleData) {
        return await VehicleRepository.update(id, vehicleData);
    }

    async deleteVehicle(id) {
        return await VehicleRepository.delete(id);
    }
}

module.exports = new VehicleService();
