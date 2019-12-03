 const path = require('path');
const fs = require('fs');
/*
fs.mkdir(path.join(__dirname, '/farhan') ,(err)=> {
    if (err){
        console.log(err)

    }else{
        console.log('Folder created ....')
    }
}); */


// create a file  and write inside it
 fs.appendFile(path.join(__dirname,'/farhan','hello.txt'),' i love react js' ,(err)=>{
    if (err){
        console.log(err)

    }else{
        console.log('file created ....')
    }
});


// read file 
fs.readFile(path.join(__dirname, '/farhan','hello.txt') ,'utf8' , (err,data) => {
    if (err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})