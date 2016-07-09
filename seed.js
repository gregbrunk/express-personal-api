// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

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
  }
];


//Remove Cities
db.City.remove({}, function(err, cities) {
	if (err) {
		console.log(err);
	} else {
		console.log('removed cities');
  		
  		//Create New Cities
  		db.City.create(lived_cities, function(err, cities){
  			if (err) {
  				return console.log(err);
  			}
  			console.log("Created: ", + cities.length + " cities");
			process.exit();
		});
	}
});