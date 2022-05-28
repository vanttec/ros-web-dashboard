const express = require('express');
const mongoose = require('mongoose');
const vehicle_routes =  require('./routes/vehicle.routes');

const app = express();
mongoose.connect('mongodb+srv://vanttec-admin:vanttec@vtec.cnsa8.mongodb.net/vanttec_db')
    .then(db => console.log('DB is connected to : ', db.connection.name))
    .catch(err => console.error(err));

//settings
app.set('port', process.env.PORT || 3000);

//Middlewares

//Routes
app.use('/api/vehicles', vehicle_routes);

//Static Files
//app.use(express.static(__dirname + '/public'));

//Server is Listening
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));   
});