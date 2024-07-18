const express = require('express');
const sequelize = require('./config/connection');
//require files from express and connection js files

const app = express();
const PORT = process.env.PORT || 3001;

sequelize.sync().then(() => {
    app.listen(PORT, () =>{
        console.log("server Started!");
    })
});