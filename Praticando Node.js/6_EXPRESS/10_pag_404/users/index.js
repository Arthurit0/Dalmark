const express = require("express");
const router = express.Router();
const path = require("path");

const basepath = path.join(__dirname, "../templates"); //users é uma pasta e templates está em outra, então precisamos navegar para ela com "../"

// Não é mais necessário o "/users"

router.get("/add", (req, resp) => {
  resp.sendFile(`${basepath}/userform.html`);
});

router.post("/save", (req, resp) => {
  console.log(req.body);

  const nome = req.body.nome;
  const idade = req.body.idade;

  console.log(`O usuário ${nome} tem ${idade} anos`);

  resp.sendFile(`${basepath}/userform.html`);
});

router.get("/:id", (req, resp) => {
  const id = req.params.id;

  // Exemplo de uso: leitura da tabela users no banco de dados, resgatar
  // dados do usuário com este id

  console.log(`Buscando usuário com id: ${id}`);

  resp.sendFile(`${basepath}/users.html`);
});

module.exports = router;
