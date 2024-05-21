const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log(`Database connected: ${conn.connection.host}`);
  } catch (err) {
    console.log("MongoDB connection error", err);
  }
};

module.exports = connectDB;
