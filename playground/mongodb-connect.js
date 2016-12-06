// const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');

//destructuring user object
// var user = {name: 'andrew', age:25};
// var {name} = user;
// console.log(name);

//1; url where database lives, callback function
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }

  console.log('Connected to MongoDB server');

//insert new document, 2 arg; object, callback function
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err,result)=> {
  //   if (err)
  //   {
  //     return console.log("Unable to insert todo", err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });


  //Insewrt new doc into Users (name, age, location)
  // db.collection('Users').insertOne({
  //
  //   name: 'Stanley Moon',
  //   age: '25',
  //   location: 'Toronto',
  //
  // }, (err,result) => {
  //   if(err){
  //     console.log("Unable to insert Users",err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });


  db.close();
});
