const express = require("express");
const Order = require("../models/Order");
const Delivery = require("../models/Delivery");

const router = express.Router();

// POST /orders/:restaurantId
router.post("/:id", async (req, res) => {
  try {
    const { userId, items, totalAmount } = req.body;
    const restaurantId = req.params.id;

    const order = await Order.create({
      userId,
      restaurantId,
      items,
      totalAmount
    });

    const delivery = await Delivery.create({
      orderId: order._id,
      deliveryPartnerName: "Rider 1",
      status: "PLACED"
    });

    res.status(201).json({
      message: "Order placed successfully",
      order,
      delivery
    });
  } catch (error) {
    console.error("Order Creation Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
