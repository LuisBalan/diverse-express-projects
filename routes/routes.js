const express = require('express');
const router = express.Router();

// Post Method
router.post('/post', (req, res) => {
    res.send('Post API')
});

//Get all Method
router.get('/getAll', (req, res) => {
    res.send('Get All API')
});

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
});

//Update by ID Method
router.update('/update/:id', (req, res) => {
    res.send('Update by ID API')
});

//Delete by ID Method
router.delete('/delte/:id', (req, res) => {
    res.delete('Delete by ID API')
});




module.exports = router;