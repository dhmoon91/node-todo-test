const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} =require('./../server/models/user');

// var id = '584af4d182074d4c11e1703';
//
// if (!ObjectID.isValid(id)){
//   console.log('ID not valiud');
// }
// Todo.find({
//   _id: id
// }). then ( (todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }). then ( (todo) => {
//   console.log('Todos', todo);
// });

// Todo.findById(id).then ( (todo) => {
// if(!todo){
//   return console.log('ID not found');
// }
//   console.log('Todo boy id', todo);
// }).catch ( (e) => console.log(e) );

//584ae8293da5dd0c1d0f5799
//User.findById 1) querie works, no user, 2)User found, print, 3)anyother error
var id = '584ae8293da5dd0c1d0f5799';
User.findById(id).then ( (user) => {
  if (!user){
    return console.log('User not found');
  }

  console.log(JSON.stringify(user,undefined,2));
}, (e) => {
  console.log(e);
});
