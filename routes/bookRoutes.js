const router = require("express").Router();

const Book = require("../../models/Book");

router.post("/", (req, res) => {
  Book.create({
    title: req.body.title,
    author: req.body.author,
    published: req.body.published,
    genre: req.body.genre,
  })
    .then((newBook) => {
      res.json(newBook);
    })
    .catch((err) => {
      res.json(err);
    });
});
