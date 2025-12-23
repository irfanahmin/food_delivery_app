const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema({
  orderId: String,
  deliveryPartnerName: String,
  status: {
    type: String,
    default: "ASSIGNED"
  }
});

module.exports = mongoose.model("Delivery", deliverySchema);
