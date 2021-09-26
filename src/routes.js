const { Router } = require('express');

const UserController = require('./app/controllers/user-controller');

const routes = Router();

routes.get('/users/list', UserController.index);
routes.get('/user/:id', UserController.show);
routes.post('/user/register', UserController.store);
routes.put('/user/edit/:id', UserController.update);
routes.delete('/user/delete/:id', UserController.delete);

module.exports = routes;
