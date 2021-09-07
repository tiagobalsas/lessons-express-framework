const express = require('express');
const app = express();
const routes = require('./routes')

app.use(express.urlencoded({ extended: true }));
app.use(routes)

const PORT = 3000;
const HTTP_OK = 'online';

app.listen(PORT, () => console.log(`${HTTP_OK} -> http://localhost:3000`));
