const Chasis = require('../models/Chasis');

class ChasisRepository {
    async getAll() {
        return await Chasis.findAll();
    }

    async getById(id) {
        return await Chasis.findByPk(id);
    }

    async create(chasisData) {
        return await Chasis.create(chasisData);
    }

    async update(id, chasisData) {
        const chasis = await Chasis.findByPk(id);
        if (chasis) {
            return await chasis.update(chasisData);
        }
        return null;
    }

    async delete(id) {
        const chasis = await Chasis.findByPk(id);
        if (chasis) {
            await chasis.destroy();
            return true;
        }
        return false;
    }
}

module.exports = new ChasisRepository();
