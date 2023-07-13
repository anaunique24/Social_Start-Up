//requiring npm express and modularized files
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = 3001;
const app = express();

//using middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

//initializing the server
db.once('open', () => {
    app.listen(PORT, () => console.log(`Now listening http://localhost:${PORT}/`));
});