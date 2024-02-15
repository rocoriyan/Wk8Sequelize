const Book = require("./model");

const addBook = async (req, res) => {
    /*body:
        {
            "title": "Trailing Commas...",
            "author": "J. Sonne",
            "GenreID": "1",
        }
    */
    try {
        const book = await Book.create({
            title: req.body.title,
            AuthorId: req.body.AuthorId,
            GenreId: req.body.GenreId,
        });
        res.status(201).json({ message: `${book.title} was added`, book: book });
    }
    catch(error){
        res.status(500).json({ message: error.message, error: error });
    }
};

const getAllBooks = async (req, res) => { //i broke this.. 
    try {
        const books = await Book.findAll({ inside: "Genre" });
        res.status(201).json({ message: "success got all books", books: books });
    }
    catch(error){
        res.status(500).json({ message: error.message, error: error });
    }
};

module.exports = {
    addBook: addBook,
    getAllBooks: getAllBooks,
};