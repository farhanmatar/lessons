const greet = (msg) => {
    console.log(msg);
}
let person = { 
name:'peter',
job : 'Node js Devolper '
}

let message = "hellow from the other side";
// greet('hi');
module.exports = greet; //defult 
module.exports.peter= person; // named export
module.exports.hello= person;

;