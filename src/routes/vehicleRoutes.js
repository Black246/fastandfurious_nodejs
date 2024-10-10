const express = require('express');
const router = express.Router();
const VehicleController = require('../controllers/vehicleController');

// Rutas
router.get('/vehicles', VehicleController.getAllVehicles);
router.post('/vehicles/assemble', VehicleController.assembleVehicle);

module.exports = router;
