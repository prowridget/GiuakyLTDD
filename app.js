const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/config");
const tripRoutes = require("./routes/tripRoutes");
const userRoutes = require("./routes/userRoutes");

require("dotenv").config();
connectDB(); // Kết nối MongoDB

const app = express();
app.use(bodyParser.json());

// Định nghĩa routes
app.use("/api", tripRoutes);
app.use("/api", userRoutes);

// Lắng nghe
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
