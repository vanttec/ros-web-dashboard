const vue = require("vue");
const App = require('../src/components/boat_info.vue');

Vue.createApp(App).mount('#boat');


// var app = Vue.createApp({
//     data() {
//         return {
//             userName: '',
//             userType: '',
//             vehicles: [],
//             vehiclesCmb: [],
//             vehicleId: '',
//             urlBase: 'http://localhost:3000'
//         }
//     },
//     methods:{
//         async getVehicles(){
//             var Id = this.vehicleId != ''? '/' + this.vehicleId : this.vehicleId;
//             this.vehicles = await this.CallApi(this.urlBase + '/api/vehicles/' + Id, 'GET', null);
//             this.vehicleId = '';
//         },
//         async CallApi(url, method, data){
//             const header = data == null? { 	method: method,
//                                             headers: { 'Content-Type': 'application/json' }} :
//                                          { 	method: method,
//                                             body: JSON.stringify(data),
//                                             headers: { 'Content-Type': 'application/json' }}
    
//             try {
//                 const response = await fetch(url, header);
//                 return await response.json();
//             }
//             catch(error){
//                 alert('Hubo un error favor de contactar al admnistrador.');
//             }
//         },
//         VehicleData(Id){
//             Id = Id != ''? '?Id=' + Id : Id;
//             window.location.href = 'usv.html' + Id;
//         },
//         async DeleteCustomer(Id){
//             const result = await this.CallApi(this.urlBase + '/api/vehicles/' + Id, 'DELETE', null)
            
// 		    if(result == 'OK'){
//                 this.getVehicles();
//                 alert('Se elimino registro correctamente')
//             }
//             else{
//                 alert('Hubo un error, favor de contactar al administrador.');
//             }
//         },
//         setSessionData(){
//             const sessionData = sessionStorage.getItem('sessionData');
//             if(sessionData == null){
//                 window.location.href = 'login.html';
//             }
//             else{
//                 const objSessionData = JSON.parse(sessionData);
//                 this.userName = objSessionData.userName;
//                 this.userType = objSessionData.profile;
//             }
//         }
//     },
//     computed:{
//         totalVehicles(){
//             return this.vehicles.length;
//         }
//     },
//     mounted(){
//         this.setSessionData();
//         if(this.userName != '') this.getVehicles();
//     }
// })