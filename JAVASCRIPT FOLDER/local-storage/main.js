// Local Storage

// localStorage.setItem('myCat','Tom');

let catName=localStorage.getItem('myCat');

document.getElementById('cat').innerHTML="my Cat name is : " + catName;

let person = {
    name:"john",
    age:35,
    job:"web developer",
    city:"hamburg"
};
// convert from object to string 
let startPerson  = JSON.stringify(person);

// localStorage.setItem('personinfo',startPerson);

let objPerson=localStorage.getItem('personinfo');
document.getElementById("person").innerHTML= JSON.parse(objPerson).city;

// document.getElementById("person").innerHTML= localStorage.getItem('personinfo');