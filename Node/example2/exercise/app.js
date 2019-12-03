const fs = require('fs');
const path = require('path')

let word = process.argv[2]
let filepath = process.argv[3]
console.log(word)

//let readable = fs.createReadStream(__dirname + '/data.txt',{encoding:'utf8'});
let readable = fs.createReadStream(__dirname + '/' +filepath,{encoding:'utf8'});
let i=0 //chunk counter 
let w= 0 //search word
readable.on('data',function(chunk){
    i++;
    console.log('reading ...'+i);
    if(chunk.includes(word)){
        w++ ;
    }
})
readable.on('end',function(){
    process.stdout.write('End of the date\n');
    process.stdout.write(`Number of chunk ${w}\n`);
    console.log(`we found + ${word} + ${w} 'time`);
})