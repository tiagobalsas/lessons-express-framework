const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world');
});

app.get('/feedback', (req, res) => {
  res.send(` 
    <form action="/feedback" method="POST">
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname"><br><br>
      <label for="lname">Last name:</label>
      <input type="text" id="lname" name="lname"><br><br>
      <input type="submit" value="Submit">
    </form>

  `);
});

app.post('/feedback', (req, res) => {
  res.send('Formulário recebido com sucesso');
});

const PORT = 3000;
const HTTP_OK = 'online';

app.listen(PORT, () => console.log(`${HTTP_OK} -> http://localhost:3000`));
