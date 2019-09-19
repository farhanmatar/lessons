import  Developer, {printName , printAge, printJob,woman} from './person3.js';
document.body.innerHTML+=woman.name +"<br>"
document.body.innerHTML+=woman.age+"<br>"
document.body.innerHTML+=woman.hobby+"<br>"

let developer = new Developer ("Peter",38,"IT");

console.log(developer);
printName(developer);
printAge(developer);
printJob(developer);