const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

const PORT = 3000;
const HTTP_OK = 'online';

app.listen(PORT, () => console.log(`${HTTP_OK} -> http://localhost:3000`));
