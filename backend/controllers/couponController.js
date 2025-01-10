// controllers/couponController.js

const Coupon = require("./models/Coupon");

const applyCoupon = async (req, res) => {
  const { couponCode } = req.body;

  try {
    // Check if coupon exists
    const coupon = await Coupon.findOne({ code: couponCode });
    if (!coupon) {
      return res.status(400).json({ message: "Invalid coupon code" });
    }

    // Check if coupon is expired
    if (new Date(coupon.expiryDate) < new Date()) {
      return res.status(400).json({ message: "Coupon has expired" });
    }

    // Check if coupon is already used
    if (coupon.isUsed) {
      return res.status(400).json({ message: "Coupon has already been used" });
    }

    // Mark the coupon as used (optional)
    coupon.isUsed = true;
    await coupon.save();

    return res.status(200).json({ message: "Coupon applied successfully", discount: coupon.discount });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = { applyCoupon };
