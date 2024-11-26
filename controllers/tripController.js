const Trip = require("../models/tripModel");


exports.getAllTrips = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.status(200).json(trips);
  } catch (err) {
    res.status(500).json({ error: "Cannot fetch trips" });
  }
};

exports.addTrip = async (req, res) => {
  try {
    const { destination, date, price, seatsAvailable } = req.body;


    const newTrip = new Trip({
      destination,
      date,
      price,
      seatsAvailable,
    });

  
    const savedTrip = await newTrip.save();
    res.status(201).json(savedTrip);
  } catch (err) {
    res.status(500).json({ error: "Cannot add trip" });
  }
};


exports.updateTrip = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body; 


    const updatedTrip = await Trip.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedTrip) {
      return res.status(404).json({ error: "Trip not found" });
    }

    res.status(200).json(updatedTrip);
  } catch (err) {
    res.status(500).json({ error: "Cannot update trip" });
  }
};


exports.deleteTrip = async (req, res) => {
  try {
    const { id } = req.params;

  
    const deletedTrip = await Trip.findByIdAndDelete(id);

    if (!deletedTrip) {
      return res.status(404).json({ error: "Trip not found" });
    }

    res.status(200).json({ message: "Trip deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Cannot delete trip" });
  }
};
