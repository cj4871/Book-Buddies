const router = require("express").Router();
const { Club, Book, User, Meeting } = require("../../models");

// api/bookclubs route
router.get("/", async (req, res) => {
  try {
    const clubData = await Club.findAll({
      include: [
        {model:Book, attributes: ['title']},
        {model:User, attributes: ['name', 'email']},
        {model:Meeting}
      
      ]
    });
    res.json(clubData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const clubData = await Club.findByPk(req.params.id);
    res.json(clubData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

//Route for creating NEW book club by ID
router.post('/', async (req, res) => {
  try {
    const newBookClub = await Club.create(req.body);
    res.status(201).json(newBookClub);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
});
  

//Route for DELETING book club by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedBookClub = Club.destroy({
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
