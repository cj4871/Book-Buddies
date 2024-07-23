const express = require('express');

const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
//require files from express and connection js files

const app = express();
//change this back to 5432 before pushing
const PORT = process.env.PORT || 3001;

// Set up handlebars with helpers
const hbs = exphbs.create({ helpers });

//for handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync().then(() => {
    app.listen(PORT, () =>{
        console.log(`Server started at ${PORT}`);
    })
});