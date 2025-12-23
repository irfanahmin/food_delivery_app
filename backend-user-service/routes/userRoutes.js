const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Simple login (create or return user)
router.post("/login", async (req, res) => {
  const { username } = req.body;

  let user = await User.findOne({ username });
  if (!user) {
    user = await User.create({ username });
  }

  res.json(user);
});

module.exports = router;
