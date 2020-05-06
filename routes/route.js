var express = require('express');
var { model } = require('../models/model');
const routers = express.Router();
routers.get('/', (req, res) => {
    res.send('Hai');
});
routers.post('/pic', async (req, res) => {
    try {
        var data = new model(req.body);
        var result = await data.save();
        res.json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
routers.get('/view', async (req, res) => {
    try {
        var result = await model.find();
        res.send(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);

    }
});
routers.post('/search',(req,res) =>{
    try {
        model.find(req.query, (error, data) => {
            if (error) {
                throw error;
            }
            else {
                res.send(data);
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
module.exports = routers