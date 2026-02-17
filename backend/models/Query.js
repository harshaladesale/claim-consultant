const mongoose = require("mongoose");

const querySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  claimType: { type: String, required: true },
  message: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Query", querySchema);
