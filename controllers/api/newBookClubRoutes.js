const express = require('express');
const expressHandlebars = require('express-handlebars');
const { User } = require('../../models');

const app = express();

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