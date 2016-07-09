var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CitySchema = new Schema({
	name: String,
	github_link: String,
	current_city: String,
	gender: String,
	height: String,
	head_shot: String,
	is_handsome: Boolean,
	is_single: Boolean,
	siblings: [ {name: String, relationship: String, is_nice: Boolean} ],
	pets: [ {name: String, species: String, color: String, personality: String, is_a_good_boy: Boolean} ],
});

var City = mongoose.model('City', CitySchema);

module.exports = City;
