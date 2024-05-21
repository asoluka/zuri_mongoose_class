const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: String,
  genre: String,
});

module.exports = mongoose.model("Books", BookSchema);
