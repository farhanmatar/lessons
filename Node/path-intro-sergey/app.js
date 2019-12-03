console.log('hello node !npm install -g nodemon')
const pathfunction = require("./pathFunctions")
const path = require ('path');

pathfunction.getBasename(__filename);
pathfunction.getBasename('/home/farhan/lessons/Node/intro-sergey');//index.js
pathfunction.getConstance()
pathfunction.getDirName()

pathfunction.getExtName(__filename);
pathfunction.getExtName('/home/farhan/lessons/Node/intro-sergey');// /home/farhan 


pathfunction.getExtName('/home/farhan/lessons/Node/.png');//.png
pathfunction.getExtName('/home/farhan/lessons/Node/Readme.md');//.md
pathfunction.getExtName('/home/farhan/lessons/Node/style.css');//.css
let res;
res= path.join('/home','use_folder');
console.log('join' +res);

res= path.join('/home','kite_runner','book.pdf');
console.log('join: ' +res);
//parse
res= path.parse('/book_store/kafka_on_the_beach/book.pdf');
console.log(res);
console.log(typeof res);
console.log('dir :' + res.dir);
console.log('base :' + res.base);
console.log('ext :' + res.ext);
console.log('name :' + res.name);

//format
console.log('\n format function');
res = path.format({
    root:'/',
    name:'book_name',
    ext:'.pdf'
});
console.log('format: '+ res);
