// Note the immediate function and the object that is returned
var mongoose = require('mongoose');
var Order = mongoose.model('Order');
module.exports = (function() {
	return {
		show: function(req,res) {
			Order.find({}, function(err,results) {
				if(err) {
					console.log(err);
				} else {
					console.log(results);
					res.json(results);
				}
			});
		},
		new: function(req,res) {
			console.log(req.body);
			Order.create({name: req.body.order.name, product: req.body.order.product, quantity: req.body.order.quantity}, function(err,data) {
				if(err) {
					console.log(err);
				} else {
					console.log('Created new order');
					res.json(data);
				}
			});
		}
	};
})();