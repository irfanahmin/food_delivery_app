const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", userSchema);
