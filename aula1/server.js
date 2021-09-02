const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world');
});

const PORT = 3000;
const HTTP_OK = 'online';

app.listen(PORT, () => console.log(`${HTTP_OK} -> http://localhost:3000`));
