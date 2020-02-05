const express = require('express');
const mysql = require('mysql');

const  app = express();
app.listen('3000',()=>{
    console.log('Server started on port  3000');
    
});
app.get('/',(req,res)=>{
    res.send('<h2> here is the hoome page</h2>');
});
// connection
const db = mysql.createConnection({
    host    :  'localhost',
    user    :  'admin1',
    password: '000qqq!!!',
    database:  'Farhan'

});
db.connect((err)=>{
    if(err){
        throw err ; 
    }
    console.log('Mysql connected');
    
})
// create DB
app.get('/createdb' , (req,res)=>{
    let sql ='create database Farhann';
    db.query(sql , (err, result)=>{
        if(err) throw err;
        console.log(result);
    res.send('Database created ....') 
   })
})

// create table
app.get('/createpoststable', (req,res)=>{
    let sql = 'CREATE TABLE posts  (id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255),PRIMARY KEY(id))'
    db.query(sql , (err , result)=>{
        if(err) throw err;
        console.log(result);
        res.send('posts table created...');
    })
})
// insert post 1
app.get('/addpost1',(req,res)=>{
    //let post = { title : "the title one "  , body: "this is the body of the post 1 "  };
    let sql = "insert into posts (id , title , body) VALUES (NULL,'title 7 ', 'body of title 7') ";
    let query = db.query( sql ,(err , result) => {
        if(err) throw err
        console.log(result);
        res.send('Post 8 added');
    })
})

// insert post 2
app.get('/addpost3',(req,res)=>{
    let post = { title : "the title three "  , body: "this is the body of the post 3 "  };
    let sql = "insert into posts set ?";
    db.query( sql,post,(err , result) => {
        if(err) throw err
        console.log(result);
        res.send('<h2>Post 2 added</h2>');
    })
})
// select posts
app.get('/getposts' , (req,res)=>{
    let sql = 'select * from posts ';
    db.query(sql , (err , result)=> {
        if (err) throw err;
        console.log( result);
        res.send('<h2>Post fetched</h2>')
    })
})
// select single post
app.get('/getpost/:id' , (req,res)=>{
    let sql = `select * from posts where id = ${req.params.id} `;
    db.query(sql , (err , result)=> {
        if (err) throw err;
        console.log( result);
        res.send('<h2>Post fetched</h2>')
    })
})

// update post
app.get('/updatepost/:id' ,(req,res)=> {
    let newTitle = 'how to learn cooking';
    let sql = `update posts set title = '${newTitle}' ,body='you are doing good job'  where id = ${req.params.id}`;
    db.query(sql, (err , result)=>{
        if (err) throw err;
        console.log( result);
        res.send('<h2>Post updated....</h2>' )
    })
})
// Delete post 
app.get ('/deletepost/:id',(req,res)=>{
   let sql = `delete from  posts where id = ${req.params.id}`;
   db.query(sql,(err,result)=>{
       if (err)throw err;
       console.log(result);
       res.send('<h2>post deleted....</h2>')
       
   })
})
