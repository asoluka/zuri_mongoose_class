const express = require("express");
const app = express();
const bookRouter = require("./routes/books.route");

// Middleware
app.use(express.json());

// Routes
app.use("/books", bookRouter);

module.exports = app;
