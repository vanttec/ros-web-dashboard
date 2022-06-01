const vehicleController = require('../controllers/vehicle.controllers');
const express = require('express');
const router = express.Router(); // Object to create routes

router.get('/', vehicleController.getVehicles); // When initial route to /customer required (GET), you respond with vehicleController.getVehicles
router.get('/:id', vehicleController.getVehicleById);
router.post('/', vehicleController.createVehicle); // Browser can send petitions with data to server to store
router.delete('/:id', vehicleController.deleteVehicle);
router.put('/:id', vehicleController.updateVehicle);

module.exports = router; // Object is exported to be used in other parts within the application