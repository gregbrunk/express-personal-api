var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var WelcomeSchema = new Schema({
    message: String,
    documentation_url: String,
    base_url: String,
    endpoints: [ {method: String, path: String, description: String} ],
  });

var Welcome = mongoose.model('Profile', WelcomeSchema);

module.exports = Welcome;