const router = require("express").Router();

const { Book } = require("../../models");

// this is just here as a test
router.get('/', async (req, res) => {
  res.send(`You're on controllers/api/bookRoutes file`);
});

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

module.exports = router;