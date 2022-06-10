class Vehicle { // Por si una tarea tiene muchos campos, nos ahorramos escribir una por una
    constructor(vehicle_name, description, dimensions, mass, thruster_name, max_thrust, sensors, power_system, processor, comms, software ) {
        this.vehicle_name = vehicle_name,
        this.description = description,
        this.dimensions = dimensions,
        this.mass = mass,
        this.thruster_name = thruster_name,
        this.max_thrust = max_thrust,
        this.sensors = sensors,
        this.power_system = power_system,
        this.processor = processor,
        this.communications = comms,
        this.software = software
    }
}

var data = {
    vehicle: new Vehicle(),
    vehicles: [],
    update: false,
    vehicle_to_update: '',
    urlBase: 'http://localhost:3000'
}

const CallApi = async(url, method, data) => {
    const header = data == null? { 	method: method,
                                    headers: { 'Accept': 'application/json','Content-Type': 'application/json' }} :
                                    { 	method: method,
                                    body: JSON.stringify(data),
                                    headers: { 'Accept': 'application/json','Content-Type': 'application/json' }}
    try {
        const response = await fetch(url, header);
        return await response.json();
    }
    catch(error){
        alert('Error. Contact admin. \n' + error);
    }
}

const getVehicles = async() => {
    // var Id = this.vehicleId != ''? '/' + this.vehicleId : this.vehicleId;
    // this.vehicles = await this.CallApi(this.urlBase + '/api/vehicles/' + Id, 'GET', null);
    this.vehicles = await this.CallApi(this.urlBase + '/api/vehicles/', 'GET', null);
    console.log(this.vehicles);
    // this.vehicleId = '';
}

const updateVehicle = async(id) => {
    this.vehicle = await this.CallApi(this.urlBase + '/api/vehicles/' + id, 'GET', null);
    this.update = true;
    this.vehicle_to_update = this.vehicle._id;
}

const sendVehicle = async() => {
    if(this.update) {
        await this.CallApi(this.urlBase + '/api/vehicles/' + this.vehicle_to_update, 'PUT', this.vehicle);
        this.getVehicles();
        this.update = false;
    } else {
        console.log(this.vehicle);
        const res = await this.CallApi(this.urlBase + '/api/vehicles/', 'POST', this.vehicle);
        console.log(res);
        this.getVehicles();
    }
    this.vehicle = new Vehicle();
}

const deleteVehicle = async(id) => {
    await this.CallApi(this.urlBase + '/api/vehicles/' + id, 'DELETE', null);
    this.getVehicles();
}

module.exports = {
    data: data,
    getVehicles: getVehicles,
    updateVehicle: updateVehicle,
    sendVehicle: sendVehicle
};


// export default ({
//     data() {
//         return {
//             vehicle: new Vehicle(),
//             vehicles: [],
//             update: false,
//             vehicle_to_update: '',

//             vehicleId: '',
//             urlBase: 'http://localhost:3000'
//         }
//     },
//     created() { // This method executes as soon as the application is loaded
//         // this.getTasks();
//         this.getVehicles();
//     },
//     methods: {
//         async CallApi(url, method, data){
//             const header = data == null? { 	method: method,
//                                             headers: { 'Accept': 'application/json','Content-Type': 'application/json' }} :
//                                          { 	method: method,
//                                             body: JSON.stringify(data),
//                                             headers: { 'Accept': 'application/json','Content-Type': 'application/json' }}
//             try {
//                 const response = await fetch(url, header);
//                 return await response.json();
//             }
//             catch(error){
//                 alert('Error. Contact admin. \n' + error);
//             }
//         },
//         async getVehicles(){
//             // var Id = this.vehicleId != ''? '/' + this.vehicleId : this.vehicleId;
//             // this.vehicles = await this.CallApi(this.urlBase + '/api/vehicles/' + Id, 'GET', null);
//             this.vehicles = await this.CallApi(this.urlBase + '/api/vehicles/', 'GET', null);
//             console.log(this.vehicles);
//             // this.vehicleId = '';
//         },
//         async updateVehicle(id){
//             this.vehicle = await this.CallApi(this.urlBase + '/api/vehicles/' + id, 'GET', null);
//             this.update = true;
//             this.vehicle_to_update = this.vehicle._id;
//         },
//         async sendVehicle() {
//             if(this.update) {
//                 await this.CallApi(this.urlBase + '/api/vehicles/' + this.vehicle_to_update, 'PUT', this.vehicle);
//                 this.getVehicles();
//                 this.update = false;
//             } else {
//                 console.log(this.vehicle);
//                 const res = await this.CallApi(this.urlBase + '/api/vehicles/', 'POST', this.vehicle);
//                 console.log(res);
//                 this.getVehicles();
//             }
//             this.vehicle = new Vehicle();
//         },
//         async deleteVehicle(id){
//             await this.CallApi(this.urlBase + '/api/vehicles/' + id, 'DELETE', null);
//             this.getVehicles();
//         }
//     }
// })