const Product = require("../models/Product");

module.exports = class ProductController {
  static showProducts(req, resp) {
    resp.render("products/all");
  }
};
