class Person {
    constructor (firstName,lastName,birthDate,address ){
        this.firstName=firstName;
        this.lastName=lastName ;
        this.birthDate=birthDate ; // 18.07.2000
        this.address =address;

    }
    greeting(){
        alert("hello"+this.firstName + "  " + this.lastName + "  ");
    
    }
    getbirthDay(){
        let today= "  " ; // 18.07.2019 
        if (today = this.birthDate){
            alert("Happy Birthday " + this.firstName)
        }
    }
}
class Student extends Person {
    constructor(firstName,lastName,birthDate,address,id, university){
        super(firstName,lastName,birthDate,address);
        this.id =id;
        this.university= university;
    }
    getAge(){
        let birthYear = " "; // JAVASCRIPT
        return 2019 - birthYear; // 2019 -2000 = 19
    }
    studentInfo(){
        // all info about the student 
    }
}