const mongoose = require("mongoose");

//ROBOBOAT SCHEMA
const taskSchemaBoat = new mongoose.Schema({
    _id: String,
    _description: String,
    _mechanical_length: String,
    _mechanical_beam: String,
    _mechanical_mass: String,
    _mechanical_max_thrust: Object,
    _components_Camera: String,
    _components_Hydrophones: String,
    _components_INS: String,
    _components_Lidar: String,
    _components_P_System: String,
    _components_Processor: String,
    _components_RF_Modules: String,
    _components_Teleoperation: String,
    _components_Thrusters: String,
    _software: Array,
}, {
    timestamps: true
});

//Submarine Schema
// const taskSchema2 = new Schema({
//     _id: String,
//     _mechanical_material: String,
//     _mechanical_beam: String,
//     _mechanical_length: String,
//     _mechanical_mass: String,
//     _mechanical_max_thrust: String,
//     _mechanical_peripherals: String,
//     _components_actuators: String,
//     _components_controlUnits: Array,
//     _components_power: Array,
//     _components_sensors: Array,
//     _connectivity: Array,
//     _software: Array,
//     _description: String,
// }, {
//     timestamps: true
// });


module.exports = mongoose.model('boatTask', taskSchemaBoat)
// module.exports = model('Task_Robosub', taskSchemaSub) 