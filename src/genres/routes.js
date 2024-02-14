const { Router } = require("express");
const genreRouter = Router();

const cntrlFuncs = require("./controllers"); //controller functions

genreRouter.post("/genres/addGenre", cntrlFuncs.addGenre);

genreRouter.get("/genres/getAllGenres", cntrlFuncs.getAllGenres);

module.exports = genreRouter;