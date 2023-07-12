const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => console.log(`Now listening http://localhost:${PORT}/`));
});