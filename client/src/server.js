// import express from 'express';
const express = require('express');

const bodyParse = require('body-parser');
const app = express();

// Settings
app.set('port', process.env.PORT || 3001);

// Middlewares : function that aid in processing before the URLs arrive
app.use(express.json()); // server will receive json formats
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());

// Static files : sends /public to server, where the html files are located
app.use(express.static(__dirname + '/../public'));
app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname));

// Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});