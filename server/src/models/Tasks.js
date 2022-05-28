const mongoose = require("mongoose");

const taskSchemaVehicle = new mongoose.Schema({
    _id: String,
    _vehicle_name:String,
    _description: String,
    _mechanical_dimmensions: Array,
    _mass: String,
    _thruster_name: String,
    _max_thrust: Object,
    _sensors:Array,
    _Power_System: String,
    _Processor: String,
    _communications: Array,
    _software: Array
});

module.exports = mongoose.model('Vehicle_Task', taskSchemaVehicle)