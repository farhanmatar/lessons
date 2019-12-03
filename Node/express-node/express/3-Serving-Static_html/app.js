const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
// set static path 
app.use(express.static(path.join(__dirname,'public')))

app.get('/users',(request,response)=>{
    let users= [
        {
            first_name : "John",
            Last_name :"Doe",
            age:55,
            job :"React developer"
        },
        {
            first_name : "peter",
            Last_name :"smith",
            age:45,
            job :"html developer"
        },
        {
            first_name : "natali",
            Last_name :"holo",
            age:22,
            job :"everything developer"
        },
        {
            first_name : "sulo",
            Last_name :"molo",
            age:26,
            job :"css developer"
        },
    ];
    response.json(users)
})

app.get('/downloads',(request,response)=>{
    response.download(path.join(__dirname,'downloads/file.pdf'))
})       
app.post('/subscribe',(request,response)=>{
   
    let name = request.body.name;
    let email = request.body.email;
     console.log(name + ' has subscribe with '+ email);
});
// redirect to a html page
app.get('/about' ,(request,response)=>{
    response.redirect('/about.html')
})

app.listen(4555,() =>{
    console.log('we are started on port 4555');

})
