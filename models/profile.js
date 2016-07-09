var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ProfileSchema = new Schema({
    message: String,
    documentation_url: String,
    base_url: String,
    endpoints: [ {method: String, path: String, description: String} ],
  });

var Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;