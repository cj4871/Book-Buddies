const { Meeting } = require("../../models");
const router = require("express").Router();

//test route
router.get("/", async (req, res) => {
  res.send(`You're on controllers/api/meetings`);
});

router.post("/", (req, res) => {
  //creating a meeting

  Meeting.create({
    date: req.body.date,
    location: req.body.date,
    time: req.body.time,
    book_chaper: req.body.book_chaper,
  })
    .then((newMeeting) => {
      res.json(newMeeting);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/id:", async (req, res) => {
  //getting meeting by id

  try {
    const meeting = await Meeting.findByPk(req.params.id);
    res.json(meeting);
  } catch (err) {
    console.error(err);
    res.status(500).send("Meeting Not foud");
  }
});

router.get("/", async (req, res) => {
  try {
    const meetings = await Meeting.findAll();
    res.json(meetings);
    //getting all meetings
  } catch (err) {
    console.error(err);
    res.status(500).send("No Meetings found");
  }
});

module.exports = router;
