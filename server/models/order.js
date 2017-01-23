// Model file that has the schema for our friends and creates a model that we can then call upon in our controller
var mongoose = require('mongoose');
// Create our friendSchema
var OrderSchema = new mongoose.Schema({
	name: String,
	product: String,
	quantity: Number,
	date: {type: Date, default: new Date()}
});
// Use the schema to create the model
// Note that creating a model CREATES the collection in the database (makes the collection plural)
mongoose.model('Order', OrderSchema);
// Notice that we aren't exporting anything -- this is because this file will be run when we require it using our config
// file and then since the model is defined we'll be able to access it from our controller