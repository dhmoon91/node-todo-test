const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} =require('./../server/models/user');

// Todo.remove({}).then( (result) => {
//   console.log(result);
// });

//you get the object back

Todo.findOneAndRemove({ _id:'584b09ae2e37aacf9432e379'}).then ( (todo)=>{

});

//Todo.findByIdAndRemove
Todo.findByIdAndRemove('584b09ae2e37aacf9432e379').then ( (todo) =>
{
  console.log(todo);
});
