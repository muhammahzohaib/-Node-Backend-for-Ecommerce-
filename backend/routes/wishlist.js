// routes/wishlist.js
const express = require("express");
const { addToWishlist, getWishlist } = require("../controllers/wishlistController");
const { authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, addToWishlist); // Add to wishlist
router.get("/", authMiddleware, getWishlist);   // Get wishlist

module.exports = router;
