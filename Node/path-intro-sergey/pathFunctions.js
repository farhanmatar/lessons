const path = require ('path');


exports.getBasename =function(){
    let BasePath = path.basename(__filename);
    console.log("basename "+BasePath);
}
exports.getConstance =function(){
    console.log("__filename"+__filename);
    console.log("__dirname"+__dirname);
}

exports.getDirName = function(){
    let DirName = path.dirname(__filename);
    console.log("dirname : "+ DirName);
}
exports.getExtName = function(file){
    let ExtName = path.extname(file);
    console.log("extname : "+ ExtName);
}