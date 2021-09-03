const { query } = require('express');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
  <body style="background-color:AliceBlue;">
    <form action="/" method="POST">
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname" style="background-color:#c1c1c1;"><br><br>
      <button class="button button1" style="color:DarkGreen; font-size: 18px;">Enviar</button>
    </form>
  </body>
  `);
});

app.get('/feedback/:id?', (req, res) => {
    res.send(req.params.id);
});

app.get('/formulario', (req, res) => {
  res.send(req.query);
});

const PORT = 3000;
const HTTP_OK = 'online';

app.listen(PORT, () => console.log(`${HTTP_OK} -> http://localhost:3000`));
