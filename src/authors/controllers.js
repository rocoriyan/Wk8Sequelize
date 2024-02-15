const Author = require("./model");

const addAuthor = async (req, res) => {
    try {
        const author = await Author.create({
            authorName: req.body.authorName,
        });
        res.status(201).json({ message: `${author.authorName} was added`, author: author });
    }
    catch(error){
        res.status(500).json({ message: error.message, error: error });
    }
};

const getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.findAll({});
        res.status(201).json({ message: "success got all authors", authors: authors });
    }
    catch(error){
        res.status(500).json({ message: error.message, error: error });
    }
};

module.exports = {
    addAuthor: addAuthor,
    getAllAuthors: getAllAuthors,
};