const fs = require('fs'); //fs mean file system
const fileExistPath = './index.html'
// how to read file using js 
let out = fs.readFile('./index.html', "UTF-8",(err,data)=>{
    if (err) throw err;
    console.log(data);
});
console.log('this is after file read function ');

var data = fs.readFileSync(fileExistPath,'utf8');
console.log(data);
console.log('first: the data has been read  ');
console.log('second : is after the reading  ');