const Book = require("./model");
const Genre = require("../genres/model.js");
const Author = require("../authors/model.js");

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
        const books = await Book.findAll({ include: ["Genre", "Author"] });
        res.status(201).json({ message: "success got all books", books: books });
    }
    catch(error){
        res.status(500).json({ message: error.message, error: error });
    }
};

const getSingleBookByTitle = async (req,res) => {
    try{
        const book = await Book.findOne({ where: { title: req.params.bookTitle } });
        const genre = await Genre.findOne({ where: { id: book.GenreId } });
        const author = await Author.findOne({ where: { id: book.AuthorId } });
        res.send({ message: "success got book", book: book, genre: genre, author: author });
    }
    catch(error){
        res.status(500).json({ message: error.message, error: error });
    }
};

module.exports = {
    addBook: addBook,
    getAllBooks: getAllBooks,
    getSingleBookByTitle: getSingleBookByTitle,
};