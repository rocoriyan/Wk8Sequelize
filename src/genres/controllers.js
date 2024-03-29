const Genre = require("./model");
const Book = require("../books/model");

const addGenre = async (req, res) => {
    /*
    body:
        {
        "genreName": "horror"
        }
    */
    try {
        const genre = await Genre.create({
            genreName: req.body.genreName,
        });

        res.status(201).json( {message: `${genre.genreName} was added`, genre: genre} );
    }
    catch(error){
        res.status(500).json({ message: error.message, error: error });
    }
};

const getAllGenres = async (req, res) => {
    try {
        const genres = await Genre.findAll({}); //await means wait to finish before going to next thing
        res.status(201).json({ message: "success got all genres", genres: genres });
    }
    catch(error){
        res.status(500).json({ message: error.message, error: error });
    }
};

const getBooksByGenre = async (req, res) => {
    try{
        const genre = await Genre.findOne({ where: { genreName:req.params.genreName } });
        const books = await Book.findAll({ where: { GenreId: genre.id } });
        res.status(201).json({ message: "success got genre and books", genre: genre, books: books });
    }
    catch(error){
        res.status(500).json({ message: error.message, error: error });
    }
}

module.exports = {
    addGenre: addGenre,
    getAllGenres: getAllGenres,
    getBooksByGenre: getBooksByGenre,
};