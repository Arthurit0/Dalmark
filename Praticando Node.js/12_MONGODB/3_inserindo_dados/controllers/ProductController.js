const Product = require("../models/Product");

module.exports = class ProductController {
  static showProducts(req, resp) {
    resp.render("products/all");
  }

  // Renderiza a página de criação de produtos: um formulário
  static createProduct(req, resp) {
    resp.render("products/create");
  }

  // Recebe os dados do formulário, os instancia em um novo Product:
  static async createProductPost(req, resp) {
    const name = req.body.name;
    const price = req.body.price;
    const description = req.body.description;

    const product = new Product(name, price, description);

    // Usa o método "save()" que envia os dados para a database
    product.save();

    // Redireciona à página de produtos
    resp.redirect("/products");
  }
};
