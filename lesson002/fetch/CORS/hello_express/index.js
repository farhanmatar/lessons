// import the module
var express = require('express');
//init the app
var app = express();

var state = {
    "state":"Hamburg",
    "capital":"Hamburg"
};
// additional headers for CORS
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept")
})



//define routes
app.get('/',function(reg,res){
    res.send('hello world zezzzzzzzzzfffffz!');
});
app.get('/state',function(reg,res){
    res.send(state);
});
//
app.listen(3000, function(){
    console.log("Example app started.....")
})