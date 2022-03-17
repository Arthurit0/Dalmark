const express = require("express");
const path = require("path");

const app = express();
const port = 3000; // Variável de Ambiente
const basepath = path.join(__dirname, "templates");

app.get("/users/:id", (req, resp) => {
  const id = req.params.id;

  // Exemplo de uso: leitura da tabela users no banco de dados, resgatar
  // dados do usuário com este id

  console.log(`Buscando usuário com id: ${id}`);

  resp.sendFile(`${basepath}/users.html`);
});

// As outras url's devem ser instanciadas acima da rota "/" para que possam ser acessadas
app.get("/", (req, resp) => {
  resp.sendFile(`${basepath}/index.html`);
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
