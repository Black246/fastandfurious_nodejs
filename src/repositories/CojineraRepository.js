const Cojinera = require('../models/Cojinera');

class CojineraRepository {
    // Obtener todas las cojinera
    async getAll() {
        return await Cojinera.findAll();
    }

    // Obtener una cojinera por ID
    async getById(id) {
        return await Cojinera.findByPk(id);
    }

    // Crear una nueva cojinera
    async create(cojineraData) {
        return await Cojinera.create(cojineraData);
    }

    // Actualizar una cojinera
    async update(id, cojineraData) {
        const cojinera = await Cojinera.findByPk(id);
        if (cojinera) {
            return await cojinera.update(cojineraData);
        }
        return null;
    }

    // Eliminar una cojinera
    async delete(id) {
        const cojinera = await Cojinera.findByPk(id);
        if (cojinera) {
            await cojinera.destroy();
            return true;
        }
        return false;
    }
}

module.exports = new CojineraRepository();
