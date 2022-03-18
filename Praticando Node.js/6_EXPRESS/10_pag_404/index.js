const express = require("express");
const path = require("path");

const usersRoutes = require("./users");

const app = express();
const port = 3000; // Variável de Ambiente
const basepath = path.join(__dirname, "templates");

// Ler o body da requisição
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Arquivos estáticos

app.use(express.static("public"));

// Transforma o body em JSON, que poderemos ler no post em req.body
app.use(express.json());

app.use("/users", usersRoutes);

// As outras url's devem ser instanciadas acima da rota "/" para que possam ser acessadas
app.get("/", (req, resp) => {
  resp.sendFile(`${basepath}/index.html`);
});

// Aqui definimos nossa página 404
app.use(function (req, resp, next) {
  resp.status(404).sendFile(`${basepath}/404.html`);
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
