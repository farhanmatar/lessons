const fs = require('fs');

// create a readable  stream 
let  read = fs.createReadStream('test.txt');

// create a writeable  stream

let writeable = fs.createWriteStream('output.txt')


read.pipe()