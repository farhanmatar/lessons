const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

MongoClient.connect('mongodb://localhost:27017/mydb', function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});