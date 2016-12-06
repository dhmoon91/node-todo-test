// const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');


var obj = new ObjectID();
console.log(obj);
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
  //
  // db.collection('Todos').find({
  //   _id: new ObjectID("58466aacd88bb016fca2bd45")
  // }).toArray().then((docs) =>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // },(err)=>{
  //   console.log('unable to fetch todos',err);
  // });

  // db.collection('Todos').find().count().then((count) =>{
  //   console.log(`Todos count: ${count}`);
  // },(err)=>{
  //   console.log('unable to fetch todos',err);
  // });

 db.collection('Users').find({
   name: "Stanley Moon"
 }).toArray().then((docs) => {
   console.log(JSON.stringify(docs,undefined,2));
 },(err) => {
   console.log('unable to fetch',err);
 });
  //db.close();
});
