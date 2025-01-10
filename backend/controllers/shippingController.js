// controllers/shippingController.js
const Shipping = require("./models/Shipping");

// Add shipping information
const addShipping = async (req, res) => {
  const { address, city, postalCode, country } = req.body;
  try {
    const shipping = new Shipping({
      user: req.user.id,
      address,
      city,
      postalCode,
      country,
    });
    await shipping.save();
    res.status(201).json({ message: "Shipping details added", shipping });
  } catch (error) {
    res.status(500).json({ message: "Error adding shipping details", error });
  }
};

module.exports = { addShipping };
