// models/Shipping.js
const mongoose = require("mongoose");

const shippingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, required: true },
  isDelivered: { type: Boolean, default: false },
});

const Shipping = mongoose.model("Shipping", shippingSchema);
module.exports = Shipping;
