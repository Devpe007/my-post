const { Router } = require('express');

const UserController = require('./app/controllers/user-controller');
const TopicController = require('./app/controllers/topic-controller');
const PublicationController = require('./app/controllers/publication-controller');

const routes = Router();

routes.get('/users/list', UserController.index);
routes.get('/user/:id', UserController.show);
routes.post('/user/register', UserController.store);
routes.put('/user/edit/:id', UserController.update);
routes.delete('/user/delete/:id', UserController.delete);

routes.get('/topics/list', TopicController.index);
routes.get('/topic/:id', TopicController.show);
routes.post('/topic/create', TopicController.store);
routes.delete('/topic/delete/:id', TopicController.delete);

routes.get('/publications/feed', PublicationController.index);
routes.post('/publication/create', PublicationController.store);

module.exports = routes;
