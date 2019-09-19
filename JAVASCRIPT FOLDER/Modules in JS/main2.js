import  Person , {printName , printAge} from './person.js';

let person = new Person("romal",25);


console.log(person);
printName(person);
printAge(person);




//to import all from person.js
// import * as p from './person.js';
// let obj ={
//     name: "khara",
//     age:20
// };

// p.printName(person);
// p.printAge(person);
 