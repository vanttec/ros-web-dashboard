const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const vehicle_routes =  require('./routes/vehicle.routes');
const app = express();


//DB Connection
require('./mongo_connection');

//settings
app.set('port', 3000);

//Middlewares
app.use(cors());

//Routes
app.use('/api/vehicles', vehicle_routes);

//Static Files
//app.use(express.static(__dirname + '/public'));

//Server is Listening
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));   
});