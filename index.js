const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const routes = require('./routes/');

dotenv.config({ path: '.env' });

// Register api routes
app.use('/api', routes);

// Set port for the server
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log(`Server up on ${app.get('port')}`);
});