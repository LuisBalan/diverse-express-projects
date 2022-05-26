const express = require('express');
const router = express.Router();
const Model = require('../model/model')

// Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    });

    try{
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    }
    catch(error){
        res.status(400).json({message: error.message});
    };
    
    //res.send('Post API')
});


//Get all Method
router.get('/getAll', async (req, res) => {
    // try{
    //     const data = await Model.find();
    //     res.json(data)
    // }catch(error){
    //     res.status(500).json({message: error.message})
    // };
    res.send('Get All API')
});

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
});

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
});

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.delete('Delete by ID API')
});


module.exports = router;