//invoke dependencies and packages
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const databaseURL = process.env.DB_URI;

mongoose.connect(databaseURL);
const database = mongoose.connection;
    
//declaring error to handle if connection fails
    database.on('error', (error) => {
        console.log(error);
    });
    
    database.once('connected', () => {
        console.log('Database connected');
    });


//declare an instance of express
const app = express();

//middleware that parses incoming requests
app.use(express.json());

app.listen(3000, () => {
    console.log('Server started at 3000');
});