const VehicleService = require('../services/vehicleService');
const AssembleVehicleRequest = require('../dtos/AssembleVehicleRequest'); // Importar el DTO

// Obtener todos los vehículos
exports.getAllVehicles = async (req, res) => {
    try {
        const vehicles = await VehicleService.getAllVehicles();
        res.json(vehicles);
    } catch (error) {
        console.error('Error al obtener los vehículos:', error);
        res.status(500).json({ error: 'Error al obtener los vehículos', details: error.message });
    }
};

// Ensamblar un vehículo
exports.assembleVehicle = async (req, res) => {
    try {
        const vehicleData = new AssembleVehicleRequest(
            req.body.marca,  // Usa minúscula
            req.body.color,  // Usa minúscula
            req.body.chasisid,  // Usa minúscula
            req.body.motorid,  // Usa minúscula
            req.body.cojineraid,  // Usa minúscula
            req.body.fechaensamblaje,  // Usa minúscula
            req.body.numeroensamblaje  // Usa minúscula
        );

        console.log('Datos recibidos en el DTO:', vehicleData); // Verificar el contenido

        const newVehicle = await VehicleService.assembleVehicle(vehicleData);
        res.status(201).json(newVehicle);
    } catch (error) {
        console.error('Error al ensamblar el vehículo:', error);
        res.status(500).json({ error: 'Error al ensamblar el vehículo', details: error.message });
        console.log(req.body)
    }
};

