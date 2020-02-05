const express = require('express');
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017"

// the atlas url on the cloud
const cloudUrl = "mongodb+srv://farhan:XX8YC4VB!!@articles-q9oox.mongodb.net/test?retryWrites=true&w=majority";

const app = express();
app.listen('3006',()=>{
    console.log('Server started on port 3006');
    
});
app.get('/',(req,res)=>{
    res.send('<h3> Mongo Example homepage </h3>')
});
//GITTING THE DATA FROM OUR DATABASE
app.get('/all',(req ,res)=>{
    MongoClient.connect(url,(err,db)=>{
        if (err) throw err;
        let myDatabase = db.db('online-shop');
        myDatabase.collection('users').find({}).toArray((err,result)=>{
            if(err)throw err;
            res.send(result);
            db.close();
           
            
        })
    })
})
// Create a new collictin for our database : online-shop
app.get('/add',(req,res)=>{
    MongoClient.connect(url , (err,db)=>{
        if (err) throw err;
        let myDb = db.db('online-shop');
        myDb.createCollection('users' ,(err,result)=>{
            if(err)throw err;
            console.log('collection users created');            
            res.send('<h2>collection created</h2>');
            db.close();
            
        }
        )
    })
})
//insert users in the database onlin-shop{collection users}
app.get('/add-users',(req,res)=>{

    MongoClient.connect(url , (err,db)=>{
        if (err) throw err;
        let myDb = db.db('online-shop');
        myDb.collection('users')
        .insertOne({name:"Alex",email:"alex@gmail",phone:0123456123},(err,res)=>{
            if(err)throw err;
            console.log('one user inserted'); 
            db.close();
        } )
    }) 
    res.send('<h2>users inserted</h2>');
})
//GITTING THE DATA FROM OUR DATABASE
app.get('/users',(req ,res)=>{
    MongoClient.connect(url,(err,db)=>{
        if (err) throw err;
        let myDatabase = db.db('online-shop');
        myDatabase.collection('users').find({}).toArray((err,result)=>{
            if(err)throw err;
            res.send(result);
            db.close();
           
            
        })
    })
})
//Delete all the users from online-shop
app.get('/delete-all-users',(req ,res)=>{
    MongoClient.connect(url,(err,db)=>{
        if (err) throw err;
        let myDb = db.db('online-shop');
        myDb.collection('users').deleteMany({},(err,result)=>{
            if(err)throw err;
            console.log('deleting users....');
            res.send(result);
            db.close();
        })
    })
   
})
// connect with atlas Cloud Database
app.get('/cloud',(req , res ) => {
    const client = new MongoClient(cloudUrl, { useNewUrlParser: true });
    client.connect(err => {
      const collection = client.db("online-shop").collection("articles");
      collection.find({}).toArray((err , result)=>{
        if(err) throw err ;
        console.log(result);
        res.send(result);
        client.close();
      });
    });
});
//insert articles to the cloud Database
app.get('/add-many',(req,res)=>{
    const client = new MongoClient(cloudUrl,{ useNewUrlParser: true });
    client.connect(err => {
        const collection = client.db("online-shop").collection("articles");
        
        collection.insertMany([{name:"Alex",email:"alex@gmail",phone:0123456123}
        ,{name:"peter",email:"peter@gmail",phone:0123456123}],(err,res)=>{
            if(err)throw err;
            console.log('one user inserted'); 
            client.close();
        } )
    }) 
    res.send('<h2>new 2 articles inserted </h2>');
})