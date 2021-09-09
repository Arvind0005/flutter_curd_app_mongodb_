var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nameschema = new Schema({
    name: String
});

module.exports = mongoose.model('Name',nameschema);