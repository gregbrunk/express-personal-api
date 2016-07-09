var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CitiesSchema = new Schema([
	{
    _id: Number,
    name: String,
    state: String,
    country: String,
    years_lived: Number,
    is_birthplace: Boolean,
    size: String,
    vibe: String,
    houses: Number,
    had_fun: Boolean
	}
]);

var City = mongoose.model('City', CitiesSchema);

module.exports = City;
