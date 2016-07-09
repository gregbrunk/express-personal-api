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

// Welcome API Object
var welcomeApi = {
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/gregbrunk/express_personal_api/documentation/gregbrunk_api_readme.txt",
    base_url: "https://serene-meadow-13371.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Greg's profile information"},
      {method: "POST", path: "/api/lived_cities", description: "Information about all the cities where Greg has lived."},
      {method: "More Coming Soon"},
    ],
};

// Profile Data API Object
var profile = {
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
};

// Cities Data API Object
var lived_cities = [
  {
    _id: 1,
    name: 'Virginia Beach',
    state: 'Virginia',
    country: 'USA',
    years_lived: 1,
    is_birthplace: true,
    size: 'medium',
    vibe: 'gross',
    houses: 1,
    had_fun: false
  },
  { 
    _id: 2,
    name: 'Chancellorsville',
    state: 'Virginia',
    country: 'USA',
    years_lived: 2,
    is_birthplace: false,
    size: 'small',
    vibe: 'quaint',
    houses: 1,
    had_fun: true
  },
  { 
    _id: 3,
    name: 'Spotsylvania',
    state: 'Virginia',
    country: 'USA',
    years_lived: 1,
    is_birthplace: false,
    size: 'small',
    vibe: 'old',
    houses: 1,
    had_fun: true
  },
  {
    _id: 4,
    name: 'Fredericksburg',
    state: 'Virginia',
    country: 'USA',
    years_lived: 5,
    is_birthplace: false,
    size: 'small',
    vibe: 'pleasant',
    houses: 2,
    had_fun: true
  },
  {
    _id: 5,
    name: 'Peoria',
    state: 'Illinois',
    country: 'USA',
    years_lived: 6,
    is_birthplace: false,
    size: 'Large',
    vibe: 'repressed',
    houses: 1,
    had_fun: false
  },
  {
    _id: 6,
    name: 'Cincinnati',
    state: 'Ohio',
    country: 'USA',
    years_lived: 9,
    is_birthplace: false,
    size: 'Huge',
    vibe: 'friendly',
    houses: 4,
    had_fun: true
  },
  {  
    _id: 7,
    name: 'Denver',
    state: 'Colorado',
    country: 'USA',
    years_lived: 5,
    is_birthplace: false,
    size: 'Huge',
    vibe: 'adventurous',
    houses: 5,
    had_fun: true
  },
  {  
    _id: 8,
    name: 'Auckland',
    state: 'North Island',
    country: 'New Zealand',
    years_lived: 1,
    is_birthplace: false,
    size: 'Large',
    vibe: 'insane',
    houses: 1,
    had_fun: true
  },
];

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

// Welcome API Endpoint
app.get('/api', function api_index(req, res) {
  res.json(welcomeApi);
});


// Profile Endpoint
app.get('/api/profile', function api_index(req, res) {
  res.json(profile);
});


// Cities API Endpoints
// Get All
app.get('/api/lived_cities', function api_index(req, res) {
  res.json(lived_cities);
});

//Get One
app.get('/api/lived_cities/:id', function api_index(req, res) {
  var cityId = req.params.id;
  for (i=0; i<lived_cities.length; i++){
    if (cityId == lived_cities[i]._id){
      res.json(lived_cities[i]);
    }
  }
  res.send("error: that is not a valid city ID! Try again.");
});

/**********
 * SERVER *
 **********/

// listen on port 3000 (local and Heroku)
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on port 3000');
});
