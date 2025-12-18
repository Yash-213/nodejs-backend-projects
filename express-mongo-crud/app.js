const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/user");

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000"
}));

// Routes
app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("API is working");
});

// DB Connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
