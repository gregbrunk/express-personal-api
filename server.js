// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

/************
 * DATABASE *
 ************/
// var db = require('./models');


/**********
 * ROUTES *
 **********/

// Static Files:
// Serve static files from the `/public` directory:
// app.use(express.static('public'));

// HTML Endpoints:
// app.get('/', function homepage(req, res) {
//   res.sendFile(__dirname + '/views/index.html');
// });


//JSON API Endpoints:
app.get('/api', function api_index(req, res) {
  res.json({
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/gregbrunk/express_personal_api/documentation/gregbrunk_api_readme.txt",
    base_url: "https://serene-meadow-13371.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Greg's profile information"},
      {method: "POST", path: "/api/lived_cities", description: "Information about all the cities where Greg has lived."},
    ],
  });
});

/**********
 * SERVER *
 **********/

// listen on port 3000 (local and Heroku)
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on port 3000');
});
