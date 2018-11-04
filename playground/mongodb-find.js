//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err) {
    return console.log('unable to connect to mongodb server');
  }

  console.log('connected to mongodb server');

  // db.collection('Todos').find({completed:false}).toArray().then((docs) => {
  //   console.log('todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err) => {
  //   console.log('unable to fetch data')
  // });

  db.collection('Todos').find().count().then((count) => {
    console.log('todo counts: ',count);
  },(err) => {
    console.log('unable to fetch data')
  });




  //db.close();
});
