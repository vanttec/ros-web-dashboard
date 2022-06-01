<template>

    <div class="container">
        <div class="row pt-5">
            <div class="col-md-4">
                <div class="card">
                 {/*      <form @submit.prevent="sendTask">
                        <div class="card-body">
                            <div>
                                <input type="text" v-model="vehicle._vehicle_name" placeholder="Insert vehicle name" class="form-control">
                            </div>
                        </div>
                        <div class="card-body">
                            <div>
                                <input type="text" v-model="vehicle._description" placeholder="Insert vehicle description" class="form-control">
                            </div>
                        </div>
                        <div class="card-body">
                            <div>
                                <input type="text" v-model="vehicle._dimensions" placeholder="Insert vehicle dimensions" class="form-control">
                            </div>
                        </div>
                        <div class="card-body">
                            <div>
                                <input type="text" v-model="vehicle._mass" placeholder="Insert vehicle mass" class="form-control">
                            </div>
                        </div>
                        <div class="card-body">
                            <div>
                                <input type="text" v-model="vehicle._thruster_name" placeholder="Insert thruster brand" class="form-control">
                            </div>
                        </div>
                        <div class="card-body">
                            <div>
                                <input type="text" v-model="vehicle._max_thrust" placeholder="Insert maximum thrust" class="form-control">
                            </div>
                        </div>
                        <div class="card-body">
                            <div>
                                <input type="text" v-model="vehicle._sensors" placeholder="Insert sensors" class="form-control">
                            </div>
                        </div>
                        <div class="card-body">
                            <div>
                                <input type="text" v-model="vehicle._Power_System" placeholder="Insert Power System" class="form-control">
                            </div>
                        </div>
                        <div class="card-body">
                            <div>
                                <input type="text" v-model="vehicle._Processor" placeholder="Insert Processor" class="form-control">
                            </div>
                        </div>

                        <div class="card-body">
                            <div>
                                <input type="text" v-model="vehicle._communications" placeholder="Insert Comms" class="form-control">
                            </div>
                        </div>
                        <div class="card-body">
                            <div>
                                <input type="text" v-model="vehicle._software" placeholder="Insert Software" class="form-control">
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

                      */}
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
                        <tr v-for="vehicle in vehicles" :key="vehicle.id">
                            <td>{{vehicle._name}}</td>
                            <td>{{vehicle._description}}</td>
                            <td>{{vehicle._dimensions}}</td>
                            <td>{{vehicle._mass}}</td>
                            <td>{{vehicle._thruster_name}}</td>
                            <td>{{vehicle._max_thrust}}</td>
                            <td>{{vehicle._sensors}}</td>
                            <td>{{vehicle._Power_System}}</td>
                            <td>{{vehicle._Processor}}</td>
                            <td>{{vehicle._communications}}</td>
                            <td>{{vehicle._software}}</td>
                            <td>
                                <!-- <button @click="deleteTask(vehicle._id)" class="btn btn-danger">
                                    Delete
                                </button>
                                <button @click="updateTask(vehicle._id)" class="btn btn-secondary">
                                    Update
                                </button> -->
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
class Vehicle { // Por si una tarea tiene muchos campos, nos ahorramos escribir una por una
    constructor(name, description, dimensions, mass, thruster_name, max_thrust, sensors, power_system, processor, comms, software ) {
        this._vehicle_name = name,
        this._description = description,
        this._dimensions = dimensions,
        this._mass = mass,
        this._thruster_name = thruster_name,
        this._max_thrust = max_thrust,
        this._sensors = sensors,
        this._Power_System = power_system,
        this._Processor = processor,
        this._communications = comms,
        this._software = software
    }
}
export default ({
    data() {
        return {
            vehicle: new Vehicle(),
            vehicles: [],
            update: false,
            vehicle_to_update: '',

            userName: '',
            userType: '',
            vehiclesCmb: [],
            vehicleId: '',
            urlBase: 'http://localhost:3000'
        }
    },
    created() { // This method executes as soon as the application is loaded
        // this.getTasks();
        this.getVehicles();
    },
    methods: {
        async CallApi(url, method, data){
            const header = data == null? { 	method: method,
                                            headers: { 'Content-Type': 'application/json' }} :
                                         { 	method: method,
                                            body: JSON.stringify(data),
                                            headers: { 'Content-Type': 'application/json' }}
            try {
                const response = await fetch(url, header);
                return await response.json();
            }
            catch(error){
                alert('Error. Contact admin. \n' + error);
            }
        },
        async getVehicles(){
            var Id = this.vehicleId != ''? '/' + this.vehicleId : this.vehicleId;
            this.vehicles = await this.CallApi(this.urlBase + '/api/vehicles/' + Id, 'GET', null);
            this.vehicleId = '';
        },
        // getTasks() {
        //     fetch('/api/vehicles/')
        //                 .then(res => res.json())
        //                 .then(data => {
        //                     this.tasks = data
        //                     console.log(this.tasks)
        //                 });
        // },
        } //,
        // // Use fetch to make petitions to server
        // updateTask(id){
        //     fetch('/api/customer/' + id)
        //     .then(res => res.json())
        //     .then(data => {
        //         this.task = new Task(data.name, data.phone, data.addres, data.email, data.dateOfBirth); // Asks for all Tasks and fills table with them
        //         this.update = true;
        //         this.task_to_update = data._id;
        //     });
        // },
        // deleteTask(id){
        //     fetch('/api/customer/' + id, {
        //         method: 'DELETE',
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-type': 'application/json'
        //         }
        //     })
        //     .then(res => res.json())
        //     .then(data => {
        //         this.getTasks(); // Asks for all Tasks and fills table with them
        //     });
        // },
        // sendTask() {
        //     if(this.update) {
        //         fetch('/api/customer/' + this.task_to_update, {
        //             method: 'PUT',
        //             body: JSON.stringify(this.task),
        //             headers: {
        //                 'Accept': 'application/json',
        //                 'Content-type': 'application/json'
        //             }
        //         })
        //         .then(res => res.json())
        //         .then(data => {
        //             this.getTasks();
        //         })
        //         this.update = false;
        //     } else {
        //         fetch('/api/customer',{ // Save data to server
        //             method: 'POST',
        //             body: JSON.stringify(this.task),
        //             headers: {
        //                 'Accept': 'application/json',
        //                 'Content-type': 'application/json'
        //             }
        //         })
        //         .then(res => res.json()) // Convert server response from string to json format
        //         .then(data => {
        //             this.getTasks(); // Asks for all Tasks and fills table with them
        //         })
        //     }
        //     this.task = new Task();
        // }
    })
    
</script>