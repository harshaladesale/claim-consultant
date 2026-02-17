const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");
const queryRoutes = require("./routes/queryRoutes");
const adminRoutes = require("./routes/admin");
const QueryRoutes = require("./routes/adminQueryRoutes");
dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/query", queryRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/admin",adminRoutes);
app.use("/api/queries",QueryRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
