const { Router } = require("express");
const bookRouter = Router();

//const Book = require("./model");

//const { addBook } = require("./controllers");
const cntrlFuncs = require("./controllers"); //controller functions

bookRouter.post("/books/addBook", cntrlFuncs.addBook);

/*bookRouter.get("/books/getAllBooks", async (req, res) => {
    const books = await Book.findAll({ inside: "Genre" });
    res.status(201).json({ message: "success got all books", books: books });
});*/

bookRouter.get("/books/getAllBooks", cntrlFuncs.getAllBooks);

bookRouter.get("/books/getSingleBookByTitle/:bookTitle", cntrlFuncs.getSingleBookByTitle);

module.exports = bookRouter;