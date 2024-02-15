const { Router } = require("express");
const authorRouter = Router();

const cntrlFuncs = require("./controllers"); //controller functions

authorRouter.post("/authors/addAuthor", cntrlFuncs.addAuthor);

authorRouter.get("/authors/getAllAuthors", cntrlFuncs.getAllAuthors);

module.exports = authorRouter;