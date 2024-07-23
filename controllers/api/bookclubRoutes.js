const express = require('express');

const app = express;

//Route to FETCH book clubs from the DB
app.get('/bookclubs', async (req, res) => {
  try {
    const bookClubs = await BookClub.findAll();
    res.json(bookClubs);
  } catch (err) {
    console.error(err);
    res.status(500).json({error: 'Server Error'});
  }
});

//Route for creating NEW book club by ID
app.post('/bookclubs', async (req, res) => {
  try {
    const newBookClub = await BookClub.create(req.body);
    res.status(201).json(newBookClub);
  } catch (err) {
    console.error(err);
    res.status(500).json({error: 'Server Error'});
  }
});

//Route for DELETING book club by ID
app.delete('/bookclubs/:id', async (req, res) => {
  try {
    const deletedBookClub = BookClub.destroy({
      where: {id: req.params.id}
    });

//Checking if Book Club was deleted
  if (deletedBookClub === 0) {
    return res.status(404).json({error: 'Book Club Not Found'}); 
  }

  res.json({message: 'Book Club Deleted Successfully'});
  } catch (err){
  console.error(err);
  res.status(500).json({error: 'Server Error'});
  }
});