// routes/shipping.js
const express = require("express");
const { addShipping } = require("../controllers/shippingController");
const { authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, addShipping);

module.exports = router;
