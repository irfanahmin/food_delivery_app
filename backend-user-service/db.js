const mongoose = require("mongoose");

const MONGO_URI = "mongodb+srv://deava_sample:deava_0701_sample@clustermain.d1ldf.mongodb.net/foodapp";

mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB connected (User Service)"))
  .catch(err => console.error(err));

module.exports = mongoose;
