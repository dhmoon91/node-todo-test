var express = require('express');
var bodyParser = require('body-parser');

//local imports
var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

//can send json to our express app/
app.use(bodyParser.json());

//creating new 'todo'
app.post ('/todos', (req,res)=> {
  //body gets stroed by bodyParser
  var todo = new Todo( {
    text: req.body.text
  });

  todo.save().then( (doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen ( 3000, () => {
  console.log("On port 3000");
});
//working mongoose model.
// var Todo = mongoose.model('Todo', {
//   text: {
//     type: String,
//     required: true,
//     minlength: 1,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number,
//     default: null
//   }
// });
//
// //define data
// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// //save data
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });
