const mongoose = require("mongoose");

const taskSchemaVehicle = new mongoose.Schema({
    _vehicle_name:String,
    _description: String,
    _dimensions: Array,
    _mass: String,
    _thruster_name: String,
    _max_thrust: String,
    _sensors:Array,
    _power_system: String,
    _processor: String,
    _communications: Array,
    _software: Array
});

module.exports = mongoose.model('Vehicle', taskSchemaVehicle)