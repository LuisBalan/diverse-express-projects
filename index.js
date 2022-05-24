//invoke dependencies and packages
const express = require('express');
const mongoose = require('mongoose');

//declare an instance of express
const app = express();

//middleware that parses incoming requests
app.use(express.json());

app.listen(3000, () => {
    console.log('Server started at 3000');
});