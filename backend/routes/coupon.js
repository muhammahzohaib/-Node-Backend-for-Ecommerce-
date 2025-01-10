// routes/coupon.js

const express = require("express");
const router = express.Router();
const { applyCoupon } = require("../controllers/couponController");

// Route to apply a coupon
router.post("/apply", applyCoupon);

module.exports = router;
