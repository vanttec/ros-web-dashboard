<template>

    <div class="container">
        <div class="row pt-5">
            <div class="col-md-4">
                <div class="card">
                       <form @submit.prevent="sendVehicle">
                        <div class="card-body">
                            <div>
                                <input type="text" v-model="vehicle.vehicle_name" placeholder="Insert vehicle name" class="form-control">
                            </div>
                        </div>
                        <div class="card-body">
                            <div>
                                <input type="text" v-model="vehicle.description" placeholder="Insert vehicle description" class="form-control">
                            </div>
                        </div>
                        <div class="card-body">
                            <div>
                                <input type="text" v-model="vehicle.dimensions" placeholder="Insert vehicle dimensions" class="form-control">
                            </div>
                        </div>
                        <div class="card-body">
                            <div>
                                <input type="text" v-model="vehicle.mass" placeholder="Insert vehicle mass" class="form-control">
                            </div>
                        </div>
                        <div class="card-body">
                            <div>
                                <input type="text" v-model="vehicle.thruster_name" placeholder="Insert thruster brand" class="form-control">
                            </div>
                        </div>
                        <div class="card-body">
                            <div>
                                <input type="text" v-model="vehicle.max_thrust" placeholder="Insert maximum thrust" class="form-control">
                            </div>
                        </div>
                        <div class="card-body">
                            <div>
                                <input type="text" v-model="vehicle.sensors" placeholder="Insert sensors" class="form-control">
                            </div>
                        </div>
                        <div class="card-body">
                            <div>
                                <input type="text" v-model="vehicle.power_system" placeholder="Insert Power System" class="form-control">
                            </div>
                        </div>
                        <div class="card-body">
                            <div>
                                <input type="text" v-model="vehicle.processor" placeholder="Insert Processor" class="form-control">
                            </div>
                        </div>

                        <div class="card-body">
                            <div>
                                <input type="text" v-model="vehicle.communications" placeholder="Insert Comms" class="form-control">
                            </div>
                        </div>
                        <div class="card-body">
                            <div>
                                <input type="text" v-model="vehicle.software" placeholder="Insert Software" class="form-control">
                            </div>
                        </div>
                        <template v-if="update == false">
                            <button class="btn btn-primary">Send</button>
                        </template>
                        <template v-else>
                            <button class="btn btn-primary">Update</button>
                        </template>
                         <div class="form-group">
                            <textarea cols="30" rows="10" class="form-control" placeholder="Insert a description"></textarea>
                        </div>
                    </form>

                </div>
            </div>
            <div class="col-md-8">
                <table class="table table-bordered">
                    <thead>
                        <th>name</th>
                        <th>description</th>
                        <th>dimensions</th>
                        <th>mass</th>
                        <th>thruster</th>
                        <th>max_thrust</th>
                        <th>sensors</th>
                        <th>power_system</th>
                        <th>processor</th>
                        <th>comms</th>
                        <th>software</th>
                    </thead>
                    <tbody>
                        <tr v-for="vehicle in vehicles" :key="vehicle._id">
                            <td>{{vehicle.vehicle_name}}</td>
                            <td>{{vehicle.description}}</td>
                            <td>{{vehicle.dimensions}}</td>
                            <td>{{vehicle.mass}}</td>
                            <td>{{vehicle.thruster_name}}</td>
                            <td>{{vehicle.max_thrust}}</td>
                            <td>{{vehicle.sensors}}</td>
                            <td>{{vehicle.power_system}}</td>
                            <td>{{vehicle.processor}}</td>
                            <td>{{vehicle.communications}}</td>
                            <td>{{vehicle.software}}</td>
                            <td>
                                <button @click="deleteVehicle(vehicle._id)" class="btn btn-danger">
                                    Delete
                                </button>
                                <button @click="updateVehicle(vehicle._id)" class="btn btn-secondary">
                                    Update
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import api_handler from "../js/api_handler.js";

api_handler = require("../js/api_handler.js");

export default ({
    data() {
        return api_handler.data;
    },
    created() {
        getVehicles();
    },
    methods() {
        getVehicles: () => { return api_handler.getVehicles(); };
        updateVehicle: () => { return api_handler.updateVehicle(); };
        sendVehicle: () => { return api_handler.sendVehicle(); };
        deleteVehicle: () => { return api_handler.deleteVehicle(); };
    }
})
// class Vehicle { // Por si una tarea tiene muchos campos, nos ahorramos escribir una por una
//     constructor(vehicle_name, description, dimensions, mass, thruster_name, max_thrust, sensors, power_system, processor, comms, software ) {
//         this.vehicle_name = vehicle_name,
//         this.description = description,
//         this.dimensions = dimensions,
//         this.mass = mass,
//         this.thruster_name = thruster_name,
//         this.max_thrust = max_thrust,
//         this.sensors = sensors,
//         this.power_system = power_system,
//         this.processor = processor,
//         this.communications = comms,
//         this.software = software
//     }
// }
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
    
</script>