// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route:
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home-page.html'));

// fish route:
app.get('/fish', (request, response, next) => response.sendFile(__dirname + '/views/fish.html'));

// Sailing route:
app.get('/sailing', (request, response, next) => response.sendFile(__dirname + '/views/sailing.html'));

// Shark route:
app.get('/shark', (request, response, next) => response.sendFile(__dirname + '/views/shark.html'));


// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000!'));
