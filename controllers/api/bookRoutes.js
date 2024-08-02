const router = require("express").Router();
const { Book } = require("../../models");

// Test route
// router.get('/', async (req, res) => {
//   res.send(`You're on controllers/api/bookRoutes file`);
// });

router.get('/', async (req, res) => {
  try {
    const dbBookData = await Book.findAll();
    res.status(200).json(dbBookData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newBook = await Book.create({
      title: req.body.title,
      // author: req.body.author,
      // publication_year: req.body.publication_year,
      // genre: req.body.genre, 
    });

    res.status(200).json(newBook);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
