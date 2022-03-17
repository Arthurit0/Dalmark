const express = require("express");
const path = require("path");

const app = express();
const port = 3000; // Variável de Ambiente
const basepath = path.join(__dirname, "templates");

const checkAuth = function (req, resp, next) {
  req.authStatus = true;

  // Aqui a bifurcação acontece!

  if (req.authStatus) {
    console.log("Está Logado"); // Prosseguiria para próxima página
    next();
  } else {
    console.log("Não está logado!"); // Voltaria para o menu
    next();
  }
};

app.use(checkAuth);

app.get("/", (req, resp) => {
  resp.sendFile(`${basepath}/index.html`);
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
