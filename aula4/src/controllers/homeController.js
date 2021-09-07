exports.paginaInicial = (req, res) => {
  res.render(index);
};

exports.msgFeedback = (req, res) => {
  res.send(`<h1>Formulário enviado com sucesso!</h1>`);
};
