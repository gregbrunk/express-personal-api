// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/************
 * DATABASE *
 ************/
var db = require('./models');


/**********
 * ROUTES *
 **********/

// Static Files:
//Serve static files from the `/public` directory:
app.use(express.static('public'));

// HTML Endpoints:
app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


//JSON API Endpoints:

// Welcome API Endpoint
app.get('/api', function api_index(req, res) {
  res.json({
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/gregbrunk/express_personal_api/documentation/gregbrunk_api_readme.txt",
    base_url: "https://serene-meadow-13371.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Greg's profile information"},
      {method: "GET", path: "/api/lived_cities", description: "Information about all the cities where Greg has lived."},
      {method: "GET", path: "/api/lived_cities/:id", description: "Information about a particular city where Greg has lived."},
      {method: "POST", path: "/api/lived_cities", description: "Add a new city where Greg has lived."},
      {method: "PUT", path: "/api/lived_cities/:id", description: "Update an attribute of a city where Greg has lived."},
      {method: "DELETE", path: "/api/lived_cities/:id", description: "Remove a city where Greg has lived."}
    ],
  });
});


// Profile Endpoint
app.get('/api/profile', function api_profile(req, res) {
  res.json({
    name: "Greg Brunk",
    github_link: "https://github.com/gregbrunk",
    current_city: "Denver, CO",
    gender: "Male",
    height: "6ft 2in",
    head_shot: "https://avatars3.githubusercontent.com/u/19507409?v=3&s=460",
    is_handsome: false,
    is_single: false,
    siblings: [ 
      { name: 'Elisabeth Brunk', relationship: 'sister', is_nice: true }, 
      { name: 'Tim Brunk', relationship: 'brother', is_nice: true },
    ],
    pets: [
      {name: 'tucker', species: 'cat', color: "black", personality: 'feisty', is_a_good_boy: false}
    ],
  });
});


// Cities API Endpoints
// Get All Cities
app.get('/api/lived_cities', function api_cities(req, res) {
  db.City.find()
    .exec(function(err, cities) {
      if (err) { 
        return console.log("index error: " + err); 
      }
      res.json(cities);
  });
});

//Get One City
app.get('/api/lived_cities/:id', function api_citiesId(req, res) {
  var cityId = req.params.id;
  db.City.findOne({_id: cityId}, function(err, foundCity){
    if (err) {
      return console.log("id error: " + err);
    }
    res.json(foundCity);
  });
});

//Create New City
app.post('/api/lived_cities', function api_ctiesNew(req, res) {
  var newCity = req.body;
  console.log(newCity);
  //Create City
  db.City.create(newCity, function(err, city) {
    if (err) {
      return console.log("save error: " + err);
    }
    res.json(city);
  });
});

//Update A City
app.put('/api/lived_cities/:name', function api_citiesUdpate(req, res) {
  //Identify City and Change
  var cityName = req.params.name;
  var change = req.body;
  //Find Database City
  db.City.findOneAndUpdate({name: cityName}, change, function(err, foundCity){
      foundCity.save(function(err, foundCity) {
        if (err) {
          return console.log("save error: " + err);
        }
        res.json(foundCity);
      });
    });
});

//Delete A City
app.delete('/api/lived_cities/:id', function api_citiesDelete(req, res) {
  //Identify City and Change
  var cityId = req.params.id;
  //Find Database City
  db.City.findOneAndRemove({_id: cityId}, function(err, deletedCity) {
    res.json(deletedCity);
  });
});

/**********
 * SERVER *
 **********/

// listen on port 3000 (local and Heroku)
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on port 3000');
});
