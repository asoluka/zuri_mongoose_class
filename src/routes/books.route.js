const express = require("express");
const bookController = require("../controllers/books.controller");
const bookRouter = express.Router();

bookRouter.post("/", bookController.create);
bookRouter.get("/", bookController.getAllBooks);
bookRouter.get("/:id", bookController.getBookById);

module.exports = bookRouter;
