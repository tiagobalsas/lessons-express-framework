const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController');
const sobre = require('./controllers/sobre');

route.get('/', homeController.paginaInicial);
route.post('/', homeController.msgFeedback);

route.get('/contato', contatoController.homeContato);

route.get('/sobre', sobre.sobre);

module.exports = route;
