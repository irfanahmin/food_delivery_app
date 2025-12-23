const express = require("express");
const cors = require("cors");
require("./db");

const userRoutes = require("./routes/userRoutes");
const restaurantRoutes = require("./routes/restaurantRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/restaurants", restaurantRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});
