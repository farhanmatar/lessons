let person1 = {
    firstName: "jack",
    lastName:"Doe",
    age:50,
    hairColor:"black",
personInfo:function(){
    console.log(this.firstName+" "+this.lastName+" "+this.age);

  }
};
function Person(first,last,age,hair){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.hairColor=hair;
    this.personInfo=function(){
        console.log(this.firstName+" "+this.lastName+" "+this.age);

    }
}
// this function to make it easier to add new person information with out adding alot of lins of writing 
let person = new Person("jack","Doe",50,"black");
let person2 = new Person("john","smith",60,"braun");

console.log(person.personInfo());
console.log(person2.personInfo());

let colors= new Array ("red","green","blue");
colors= ["red","green","blue"]; // the same way to defind Array [] = new Array

console.log(colors);

let car =new Object();
car.name="bmw",
car.year="2019",
console.log(car);
car = {};// the same with new object ();
/////////////////////////////////////////////////////////////////////////////////////

function Employee(name,slary,job){
    this.firstName=name;
    this.slary=slary;
    this.job=job;
    
    this.info=function(){
       return this.firstName+" "+this.slary+"$"+" and work as " +this.job + "live in "+ this.city;

    }
}
let empl1 = new Employee("jack","4000 ","manager");
let empl2 = new Employee("hanna","5000 ","markiting");
console.log(empl1.info());
console.log(empl2.info());


empl1.city = "Hamburg";
empl2.city = "New York";
console.log(empl1.city);
console.log(empl2.city);
console.log(empl1.info());
console.log(empl2.info());
///////////////////////////////////////////////////////////////////

let student = {
    
    name:"Mara",
    age: "22",
    city:"Berlin",
    university: "TU Berlin",
    Language:"EN",
    get lang (){ // to get the value of a property
        return this.Language;
    
    },
    set lang(value){  // to change the value of a property
        this.Language=value;


    }
};
console.log(student.lang);
student.lang="DE";
console.log(student.lang);

/* student.language="English";
console.log(student.lang);
 */

function Student(name, age, city, university, language, usd, changeRate) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.university = university;
    this.language = language;
    this.bankAccount = usd;
    this.changeMoney = function () {
        return this.bankAccount * changeRate;
 
    },
        this.studentInfo = function () {
            return this.name + " " + this.age + " live in "+this.city + " and study in "
        + this.university+" and speak "+ this.language+ " and have "+ this.changeMoney()+ " Euro";   };
 }
 let student1 = new Student("Lara", "23", "Hamburg", "Uni Hamburg", "German", 1000, 0.8);
 let student2 = new Student("Leo", "22", "Berlin", "Uni Berlin", "English", 5500, 1.2);
 
 console.log(student1.studentInfo());
 console.log(student2.studentInfo());
// ///////////////////////////////////////////////////////////////////

 class Students {

     constructor(name, age, city, university, language, usd, changeRate){
         
        this.name = name;
        this.age = age;
        this.city = city;
        this.university = university;
        this.language = language;
        this.bankAccount = usd;
        this.changeMoney = function () {
            return this.bankAccount * changeRate;
     
        },
            this.studentInfo = function () {
                return this.name + " " + this.age + " live in "+this.city + " and study in "
            + this.university+" and speak "+ this.language+ " and have "+ this.changeMoney()+ " Euro";   };
     
            
        }
        hello(){
            return "Helllo" + this.name;
        }
     }
     let manuel=new Students("Manuel",27,"koln","koln univercity","german",1000,1.1);
     alert(manuel.hello());

     console.log(manuel.studentInfo());
     document.getElementById("info").innerHTML=manuel.studentInfo();
 