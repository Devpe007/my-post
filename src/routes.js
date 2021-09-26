const { Router } = require('express');

const UserController = require('./app/controllers/user-controller');

const routes = Router();

routes.get('/list', UserController.index);
routes.post('/register', UserController.store);

module.exports = routes;
