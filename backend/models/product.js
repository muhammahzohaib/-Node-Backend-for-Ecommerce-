
// models/Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  keywords: { type: [String], default: [] },
  image: { type: String, required: false },
  bestSeller: { type: Boolean, default: false },
  material: { type: String },
  size: { type: String },
  colorOptions: { type: [String] },
  careInstructions: { type: String },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
