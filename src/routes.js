const { Router } = require('express');

const UserController = require('./app/controllers/user-controller');

const routes = Router();

routes.get('/users/list', UserController.index);
routes.post('/user/register', UserController.store);
routes.put('/user/edit/:id', UserController.update);

module.exports = routes;
