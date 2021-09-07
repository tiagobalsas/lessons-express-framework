const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');
const sobre = require('./src/controllers/sobre');

route.get('/', homeController.paginaInicial);
route.post('/', homeController.msgFeedback);

route.get('/contato', contatoController.homeContato);

route.get('/sobre', sobre.sobre);

module.exports = route;
