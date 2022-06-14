const mongoose = require("mongoose");

const taskSchemaVehicle = new mongoose.Schema({
    vehicle_name: String,
    description: String,
    dimensions: Array,
    mass: String,
    thruster_name: String,
    max_thrust: String,
    sensors: Array,
    power_system: String,
    processor: String,
    communications: Array,
    software: Array
}, {minimize: false});

module.exports = mongoose.model('Vehicle', taskSchemaVehicle)