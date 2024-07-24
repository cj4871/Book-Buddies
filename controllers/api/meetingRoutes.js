const { Meeting } = require("../../models");
const router = require("express").Router();

router.post("/", (req, res) => {
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
  try {
    const meeting = await Meeting.findByPk();
    res.json(meeting);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Meeting Not Found" });
  }
});

router.get("/", async (req, res) => {
  try {
    const meetings = await Meeting.findAll();
    res.json(meetings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "No Meetings Found" });
  }
});

module.exports = router;
