const router = require('express').Router();
const { Book_Club } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const dbBookData = await Book_Club.findAll();
    res.status(200).json(dbBookData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.post("/", async (req, res) => {
  try {
    const bookClubData = await Book_Club.create({
      clubId: req.body.clubId,
      bookId: req.body.bookId,
    });
    res.status(200).json(bookClubData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
