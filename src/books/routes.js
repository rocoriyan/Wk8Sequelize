const { Router } = require("express");
const bookRouter = Router();

//const { addBook } = require("./controllers");
const cntrlFuncs = require("./controllers"); //controller functions

bookRouter.post("/books/addBook", cntrlFuncs.addBook);

module.exports = bookRouter;