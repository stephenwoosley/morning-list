

// ********** SETUP AND DEPENDENCIES **********
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var Todo = require("./models/Todo.js");
var app = express();
var PORT = process.env.PORT || 3000;
// Set mongoose to leverage built in JavaScript ES6 Promises
// mongoose.Promise = Promise;
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("./public"));

// Database configuration with mongoose
mongoose.connect("mongodb://localhost/todo");
var db = mongoose.connection;
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});
db.once("open", function() {
  console.log("Mongoose connection successful.");
});


// ********** SAVE TO-DO ON SUBMIT ********** //

app.post("/submit", function(req, res) {
  // Use our Todo model to make a new todo from the req.body
  var newTodo = new Todo(req.body);
  // Save the new todo to mongoose
  newTodo.save(function(error, todo) {
    // Send any errors to the browser
    if (error) {
      res.send(error);
    }
    // Otherwise
    else {
      res.send(todo);
    }
  });
});


// ********** ROUTE TO ADD TO-DO TO LIST ********** //
app.get("/api/todos", function(req, res) {

  Todo.find({})
    .exec(function(error, doc) {
      if (error) {
        res.send(error);
      }
      else {
        res.send(doc);
      }
  });
});

// ********** ROUTE TO POST NEW TO-DO TO LIST ********** //
app.post("/api/todos", function(req, res) {
  var newTodo = new Todo(req.body);

  console.log(req.body);

  newTodo.save(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// Route to delete an article from saved list
app.delete("/api/todos/", function(req, res) {

  var url = req.param("url");

  Todo.find({ url: url }).remove().exec(function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Deleted");
    }
  });
});


// ********** SEND ANY NON-API REQUEST TO INDEX.HTML (REACT ROUTER) ********** //

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});


// ********** APP LISTENING  ********** //

app.listen(PORT, function() {
  console.log("App running on port "+ PORT + "!");
});



// ********** EXAMPLE TO-DO AND SAVE ********** //

// var exampleTodo = new Todo({
//   text: "Hug Daddy"
// });
// Using the save method in mongoose, we create our example todo in the db
// exampleTodo.save(function(error, todo) {
//   // Log any errors
//   if (error) {
//     console.log(error);
//   }
//   // Or log the todo
//   else {
//     console.log(todo);
//   }
// });
