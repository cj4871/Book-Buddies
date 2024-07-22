const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers')
//require files from express and connection js files

const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync().then(() => {
    app.listen(PORT, () =>{
        console.log(`Server started at ${PORT}`);
    })
});