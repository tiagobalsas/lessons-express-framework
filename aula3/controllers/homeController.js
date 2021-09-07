exports.paginaInicial = (req, res) => {
  res.send(`
  <body style="background-color:AliceBlue;">
    <form action="/" method="POST">
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname" style="background-color:#c1c1c1;"><br><br>
      <button class="button button1" style="color:DarkGreen; font-size: 18px;">Enviar</button>
    </form>
  </body>
  `);
};

exports.msgFeedback = (req, res) => {
  res.send(`<h1>Formulário enviado com sucesso!</h1>`);
};
