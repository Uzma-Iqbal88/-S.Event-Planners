const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const app = express();

mongoose.connect("mongodb://localhost:27017/Product");

mongoose.connection.on('connected', () => {
    console.log('Connected!');
});

mongoose.connection.on('error', () => {
    console.log('Connection Error');
});

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');