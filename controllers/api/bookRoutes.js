const router = require("express").Router();

const { Book } = require("../../models");

// this is just here as a test
// router.get('/', async (req, res) => {
//   res.send(`You're on controllers/api/bookRoutes file`);
// });

router.get('/', async (req, res) => {
  try {
   const dbBookData = await Book.findAll();
   res.status(200).json(dbBookData);
   // const libraries = dbBookData.map((library) =>
   //   library.get({ plain: true })
   // );
 
  } catch (err){
     console.log(err);
     res.status(500).json(err);
  }
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