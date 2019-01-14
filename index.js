const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const routes = require('./routes/');
const ErrorHandler = require('./handlers/ErrorHandler');

dotenv.config({ path: '.env' });

const app = express();


// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Register api routes
app.use('/api', routes);

// Handle 404s
app.use(ErrorHandler.notFound);

// Set port for the server
app.set('port', process.env.PORT || 3000);

// Initialize countries
global.countries = [];

app.listen(app.get('port'), () => {
    console.log(`Server up on ${app.get('port')}`);
});