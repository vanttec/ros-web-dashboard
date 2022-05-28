const Task = require('../models/Tasks');

const getVehicles = async (req, res) => {
    const task = await Task.find(); 
    return res.json(task);
};

const getVehicleById = async (req, res) => {
    const task = await boatTask.findById(req.params.id); 
    return res.json(task);
};

const createVehicle = async (req, res) => {
    const task = new boatTask(req.body);
    await task.save();
    res.json({
        status: 'Data saved'
    });
}

const updateVehicle = async (req, res) => {
    await boatTask.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Data updated'
    })
}

const deleteVehicle = async (req, res) => {
    await boatTask.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Data removed'
    })
}

module.exports = {
    getVehicles: getVehicles,
    getVehicleById: getVehicleById,
    createVehicle: createVehicle,
    deleteVehicle: deleteVehicle,
    updateVehicle: updateVehicle
}