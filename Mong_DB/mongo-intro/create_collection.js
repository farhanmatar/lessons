const mongo=require("mongodb");
const MongoClient=mongo.MongoClient;
const url = "mongodb://localhost:27017/";
//we will insert adocument inside collection its like making  a table=collection and inserting an arow or column = document inside json
MongoClient.connect(url,(err,db)=>{
    if(err) throw err;
   let mydb=db.db("mydb");
   let myObj2={name:"Facebook",address:"New York"};
   let myObj1={name:"Google",address:"Silicon Valley"};
   mydb.collection("customers").insertOne(myObj1,(err,res)=>{
    if(err) throw err;
    console.log("1st Document was inserted ...");
    db.close();
   });
   mydb.collection("customers").insertOne(myObj2,(err,res)=>{
    if(err) throw err;
    console.log("2nd Document was inserted ...");
    db.close();
   })
});