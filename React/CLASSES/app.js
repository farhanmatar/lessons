import Person from './main.js'

class DciStudent extends Person{
    constructor(name,job,age){
        super(name,job , age);
    }
}
let person2 = new DciStudent("mansour") 
    console.log(person2)
    person2.calculate_age(1985)
    console.log(person2.age)

