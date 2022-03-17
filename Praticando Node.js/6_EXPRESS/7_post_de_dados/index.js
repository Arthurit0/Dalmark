const express = require("express");
const path = require("path");

const app = express();
const port = 3000; // Variável de Ambiente
const basepath = path.join(__dirname, "templates");

// Ler o body da requisição
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Transforma o body em JSON, que poderemos ler no post em req.body
app.use(express.json());

app.get("/users/add", (req, resp) => {
  resp.sendFile(`${basepath}/userform.html`);
});

app.post("/users/save", (req, resp) => {
  console.log(req.body);

  const nome = req.body.nome;
  const idade = req.body.idade;

  console.log(`O usuário ${nome} tem ${idade} anos`);

  resp.sendFile(`${basepath}/userform.html`);
});

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
