const express = require('express');
const expressHandlebars = require('express-handlebars');
const path = require('path'); 
const { User } = require('../../models');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

//route for handlebars 
app.get('/new-book-club',(req, res) => {
  const data = {
    clubName: 'New Book Club',
    members: ['Emmalyn', 'Isaac', 'Walter', 'Leo']
  };

  //Rendering and sending it as a response
  res.render('newBookClub', data);

  
});