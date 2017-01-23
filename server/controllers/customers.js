// Note the immediate function and the object that is returned
var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
module.exports = (function() {
	return {
		show: function(req,res) {
			Customer.find({}, function(err,results) {
				if(err) {
					console.log(err);
				} else {
					console.log(results);
					console.log('hello');
					res.json(results);
				}
			});
		},
		new: function(req,res) {
			console.log(req.body);
			Customer.create({name: req.body.customer.name}, function(err,data) {
				if(err) {
					console.log(err);
				} else {
					console.log('Created new customer');
					res.json(data);
				}
			});
		}
	};
})();