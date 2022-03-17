const express = require("express");
const path = require("path");

const app = express();
const port = 3000; // Variável de Ambiente
const basepath = path.join(__dirname, "templates");

app.get("/", (req, resp) => {
  resp.sendFile(`${basepath}/index.html`);
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
