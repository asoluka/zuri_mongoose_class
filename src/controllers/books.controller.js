const Books = require("../models/books.model");

async function create(req, res) {
  const newBook = new Books(req.body);
  const savedBook = await newBook.save();
  res.json(savedBook);
}

async function getAllBooks(req, res) {
  const allBooks = await Books.find({});
  res.json({ message: "Books found", data: allBooks });
}

async function getBookById(req, res) {
  const book = await Books.findOne({
    _id: req.params.id,
  });
  res.json({ message: "Books found", book });
}

module.exports = {
  create,
  getAllBooks,
  getBookById,
};
