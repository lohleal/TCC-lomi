const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();
// Rotas específicas devem vir antes das rotas com parâmetros
router.get("/products/count", productController.getProductsCount);
router.get("/products/search", productController.searchProducts);
router.post("/products", productController.createProduct);
router.get("/products", productController.getAllProducts);
router.get("/products/:id", productController.getProductById);
router.put("/products/:id", productController.updateProduct);
router.delete("/products/:id", productController.deleteProduct);
module.exports = router;
