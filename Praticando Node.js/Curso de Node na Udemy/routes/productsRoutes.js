const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/ProductController");

router.get("/create", ProductController.createProduct);
// Nova rota para o método post
router.post("/create", ProductController.createProductPost);
router.get("/", ProductController.showProducts);

module.exports = router;
