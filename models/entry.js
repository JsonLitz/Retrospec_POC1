
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EntrySchema = new Schema({
  title: String,
  entry: Number
});

var Song = mongoose.model('Entry', EntrySchema);

module.exports = Entry;
