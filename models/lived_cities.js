var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CitySchema = new Schema({
    name: String,
    state: String,
    country: String,
    years_lived: Number,
    is_birthplace: Boolean,
    size: String,
    vibe: String,
    houses: Number,
    had_fun: Boolean
});

var City = mongoose.model('City', CitySchema);
module.exports = City;
