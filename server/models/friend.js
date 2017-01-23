// This is a file for the Friend Schema to manage the friends portion of the database
var mongoose = require('mongoose');
// Creating the Schema
var FriendSchema = new mongoose.Schema({
	name: String,
	age: Number
});
// Use the schema to create the Model
// Creating the model creates the COLLECTION in the database
mongoose.model('Friend', FriendSchema);