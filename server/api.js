const express = require('express');
const bodyParser = require('body-parser');

const routerApi = express.Router()

routerApi.use(bodyParser.urlencoded({ extended: false }))
routerApi.use(bodyParser.json());

routerApi.get('/test', async(req, res) => {
    res.send({test: 'test'})
});

module.exports = routerApi

