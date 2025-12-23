const express = require("express");
const cors = require("cors");
require("./db");

const orderRoutes = require("./routes/orderRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/orders", orderRoutes);

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Order Service running on port ${PORT}`);
});
