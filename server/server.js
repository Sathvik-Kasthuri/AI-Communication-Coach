const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("AI Communication API is running");
});

app.listen(port, () => {
  console.log(`Server running on the port ${port}`);
});
