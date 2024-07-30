const router = require("express").Router();
const { BookClub, Book } = require("../../models");

// api/bookclubs route
router.get("/", async (req, res) => {
  try {
    const bookClubs = await BookClub.findAll({
      include: [
        {
          model: Book
        }
      ]
    }
    );
    res.json(bookClubs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const bookClub = await BookClub.findByPk(req.params.id);
    res.json(bookClub);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

//Route for creating NEW book club by ID

router.post("/", async (req, res) => {
  try {
    const newBookClub = await BookClub.create(req.body);
    res.status(201).json(newBookClub);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

//Route for DELETING book club by ID

router.delete("/:id", async (req, res) => {
  try {
    const deletedBookClub = BookClub.destroy({
      where: { id: req.params.id },
    });

    //Checking if Book Club was deleted
    if (deletedBookClub === 0) {
      return res.status(404).json({ error: "Book Club Not Found" });
    }

    res.json({ message: "Book Club Deleted Successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
