const Motor = require('../models/Motor');

class MotorRepository {
    // Obtener todos los motores
    async getAll() {
        return await Motor.findAll();
    }

    // Obtener un motor por ID
    async getById(id) {
        return await Motor.findByPk(id);
    }

    // Crear un nuevo motor
    async create(motorData) {
        return await Motor.create(motorData);
    }

    // Actualizar un motor
    async update(id, motorData) {
        const motor = await Motor.findByPk(id);
        if (motor) {
            return await motor.update(motorData);
        }
        return null;
    }

    // Eliminar un motor
    async delete(id) {
        const motor = await Motor.findByPk(id);
        if (motor) {
            await motor.destroy();
            return true;
        }
        return false;
    }
}

module.exports = new MotorRepository();
