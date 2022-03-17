const express = require("express");
const app = express();
const port = 3000; // Variável de Ambiente

app.get("/", (req, resp) => {
  // req = Requisição, o que recebemos do usuário
  // resp = Resposta, o que enviamos para o usuário
  resp.send("Olá Mundo");
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
