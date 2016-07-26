var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var grocerySchema = new Schema({
  name: String,
  qty: Number
});

module.exports = mongoose.model('Grocery', grocerySchema)
