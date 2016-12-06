// const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');


//1; url where database lives, callback function
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server');

 //   db.collection('Todos').findOneAndUpdate({
 //     _id: new ObjectID("584676a3163d39cd0eaee86d")
 //   },{
 //     $set: {
 //       completed: true
 //     }
 // }, {
 //   returnOriginal: false
 // }).then( (result) => {
 //   console.log(result);
 // });

  db.collection('Users').findOneAndUpdate( {
    _id: new ObjectID ("58466ba0f32f9d20c8853865")
  }, { $set: {name: "Stanley Moon"}, $inc: {age: 1}},
{returnOriginal:false}).then ( (result) => {
  console.log(result);
});

  //db.close();
});
