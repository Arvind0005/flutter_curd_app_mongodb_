var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nameschema = new Schema({
    name: String,
    imageurl:String
});

module.exports = mongoose.model('Name',nameschema);