var mongoose = require('mongoose');

db = mongoose.connect('mongodb://localhost/corlate');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	id: Number,
	email: String,
	password: String
})

var userModel = mongoose.model('user', userSchema);

module.exports = userModel;