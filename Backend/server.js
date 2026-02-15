const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dbConfig = require("./config/db");

const authRoutes = require("./routes/auth");
const machineRoutes = require("./routes/machines");
const partRoutes = require("./routes/parts");
const logRoutes = require("./routes/logs");
const exportRoutes = require("./routes/export");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(dbConfig.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/machines", machineRoutes);
app.use("/api/parts", partRoutes);
app.use("/api/logs", logRoutes);
app.use("/api/export", exportRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
