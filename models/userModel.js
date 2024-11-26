const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  full_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone_number: { type: String },
  address: { type: String },
  country: { type: String },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
