// This file needs to be required in the server.js file
// add required controller files
var friends = require("../server/controllers/friends.js");
module.exports = function(app) {
	// verb: get, plural of target as the URI is the RESTful index method
	app.get('/friends', function (req,res) {
		friends.index(req,res);
	});
	app.get('/friends/')
	app.post('/friends', function (req,res) {
		friends.new(req,res);
	});
}