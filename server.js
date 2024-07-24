const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const path = require('path');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
//require files from express and connection js files

const app = express();
//change this back to 5432? I had to change it to run on insomnia, IDK if that messed with Render
const PORT = process.env.PORT || 3001;

// Set up handlebars with helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 90 * 24 * 60 * 60 * 1000, //expires in 90 days
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
      db: sequelize
  })
};
  
app.use(session(sess));
//for handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

sequelize.sync().then(() => {
    app.listen(PORT, () =>{
        console.log(`Server started at ${PORT}`);
    })
});