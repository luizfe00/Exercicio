const express = require('express');
const UserController = require('./controllers/UserController')

const routes = express.Router();

routes.post('/api/users', UserController.store);

module.exports = routes;