const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://deava_sample:deava_0701_sample@clustermain.d1ldf.mongodb.net/foodapp";

mongoose.connect(MONGO_URI);

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected (Order Service)");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB error:", err);
});

module.exports = mongoose;
