const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017/";


/* MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  let mydb =db.db("mydb");
  mydb.collection("customers").findOne({} ,function(err , result){
    if (err) throw err;
    console.log(result.name);
    console.log(result.address);
    db.close();
    
  });
}); */



  //get list of all documents
  /* MongoClient.connect(url,(err,db)=>{
      if(err) throw err;
      let mydb=db.db("mydb");
      mydb.collection("customers").find({}).toArray( (err,result)=>{
          if(err) throw err;
          console.log(result);
          db.close()
      });
  });
 */


  // how to use query
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let mydb = db.db("mydb");
    let query = {name:"Facebook"};
    mydb.collection("customers").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log("get list for google only");
        console.log(result);
        db.close();
    });
  });