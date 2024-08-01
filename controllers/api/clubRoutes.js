const router = require("express").Router();
const { Club, Book } = require("../../models");

// api/bookclubs route
router.get("/", async (req, res) => {
  try {
    const clubData = await Club.findAll({
      include: [{model:Book, attributes: ['title']}]
    });
    res.json(clubData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const clubData = await BookClub.findByPk(req.params.id);
    res.json(clubData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

//Route for creating NEW book club by ID
router.post('/', async (req, res) => {
  const { clubName, description } = req.body;

  if (!clubName || !description) {
    return res.status(400).json({ error: 'Club Name and Description are required' });
  }
  try {
    const newBookClub = await BookClub.create({ clubName, description });
    res.status(201).json(newBookClub);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
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
