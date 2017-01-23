var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = (function() {
	return {
		index: function(req, res) {
			Friend.find({}, function(err,results) {
				if(err) {
					console.log("Error fetching friends");
				} else {
					res.json(results);
				}
			});
		},
		new: function(req,res) {
			Friend.create({name: req.body.friend.name, age: req.body.friend.age}, function(err,data) {
				if(err) {
					console.log("Failed to create new friend");
				} else {
					console.log("Successfully added " + req.body.friend.name);
					res.json(data);
				}
			});
		}
	}
})();