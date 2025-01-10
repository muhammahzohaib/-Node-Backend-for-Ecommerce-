// routes/product.js
const express = require("express");
const { searchProducts } = require("../controllers/productController");
const router = express.Router();

router.get("/search", searchProducts); // Advanced search route

module.exports = router;
