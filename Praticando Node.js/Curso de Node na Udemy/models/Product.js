const conn = require("../db/conn");

class Product {
  // Instancia o objeto produto com os dados enviados no construtor
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }

  save() {
    // Envia os dados coletados pelo construtor para a database. Também crio a collection "products"
    const product = conn.db().collection("products").insertOne({
      name: this.name,
      price: this.price,
      description: this.description,
    });

    return product;
  }
}

module.exports = Product;
