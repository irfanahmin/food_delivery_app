const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: String,
  restaurantId: String,
  items: Array,
  status: {
    type: String,
    default: "PLACED"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Order", orderSchema);
