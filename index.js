//invoke dependencies and packages
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const databaseURL = process.env.DB_URI;
const routes = require('./routes/routes');
const PORT = process.env.PORT || 3000;
//declare an instance of express (starts a new application)
const app = express();

//middleware that parses incoming requests
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));

//this is the base endpoint
app.use('/api', routes);

mongoose.connect(databaseURL);
//mongoose.connect('mongodb+srv://LuisBalan:06AjroGw5XXyKjqQ@cluster0.rekoi.mongodb.net/?retryWrites=true&w=majority');
const database = mongoose.connection;
    
//declaring error to handle if connection fails
    database.on('error', (error) => {
        console.log(error);
    });
    
    database.once('connected', () => {
        console.log('Database connected');
    });


//comment

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});