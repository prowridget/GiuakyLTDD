const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  cityName: { type: String, required: true },
  tripName: { type: String, required: true },
  guestName: { type: String, required: true },
  time: { type: Date, required: true },
  days: { type: Number, required: true },
  price: { type: Number, required: true },
  avatar: { type: String, required: true },
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
