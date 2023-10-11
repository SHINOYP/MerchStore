require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

//database Config
connectDB();

//express app created
const app = express();
const server = require("http").createServer(app);
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};


//middleware
app.use(express.json());
app.use(morgan("dev"));

// Serve static files from the "uploads" directory
app.use("/uploads", express.static("uploads"));

//routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/category", categoryRoutes);


//PORT
const PORT = process.env.PORT || 8000;

//run listern
app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`.bgCyan.bgBlack);
});