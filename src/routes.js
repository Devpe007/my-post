const { Router } = require('express');

const UserController = require('./app/controllers/user-controller');

const TopicController = require('./app/controllers/topic-controller');

const routes = Router();

routes.get('/users/list', UserController.index);
routes.get('/user/:id', UserController.show);
routes.post('/user/register', UserController.store);
routes.put('/user/edit/:id', UserController.update);
routes.delete('/user/delete/:id', UserController.delete);

routes.post('/topic/create', TopicController.store);

module.exports = routes;
