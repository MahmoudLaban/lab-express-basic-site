// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// our first Route:
app.get('/', (request, response, next) => response.send('<h1>Welcome Mahmoud. :)</h1>'));

// home Route:
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/Home.html'));

// about route:
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/About.html'));
// ...

// works route:
app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/Works.html'));
// ...

// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000! '));
