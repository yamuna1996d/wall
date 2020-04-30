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

routers.post('/addcourse', async (req, res) => {
    try {
        var data = new cousemodel(req.body);
        var result = await data.save();
        res.json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

module.exports = routers