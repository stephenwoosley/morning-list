// Dependency
var mongoose = require("mongoose");

// Create the Schema class
var Schema = mongoose.Schema;

// Instantiate a userSchema object with the Schema class we just made
var TodoSchema = new Schema({
  text: String,
  completed: { type: Boolean, default: false },
  updated: { type: Date, default: Date.now },
  dueDate: {type: Date}
});

var Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
