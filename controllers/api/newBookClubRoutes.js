const express = require('express');
const expressHandlebars = require('express-handlebars');
const path = require('path'); 
const { User } = require('../../models');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

//Setting up handlebars as view
app.engine('handlebars', expressHandlebars());
app.set('views', path.join(__dirname, 'views'));

//route for handlebars 
app.get('/new-book-club',(req, res) => {
  const data = {
    clubName: 'New Book Club',
    members: ['Emmalyn', 'Isaac', 'Walter', 'Leo']
  };

  //Rendering and sending it as a response
  res.render('newBookClub', data);

  
});