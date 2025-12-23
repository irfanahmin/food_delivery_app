const express = require("express");
const mongoose = require("mongoose");
const Restaurant = require("../models/Restaurant");
const Menu = require("../models/Menu");

const router = express.Router();

// Get all restaurants
router.get("/", async (req, res) => {
  const restaurants = await Restaurant.find();
  res.json(restaurants);
});

// ✅ FIXED: Get menu by restaurant
router.get("/:id/menu", async (req, res) => {
  try {
    const restaurantId = new mongoose.Types.ObjectId(req.params.id);

    const menu = await Menu.find({ restaurantId });
    res.json(menu);
  } catch (err) {
    res.status(400).json({ error: "Invalid restaurant ID" });
  }
});

module.exports = router;
