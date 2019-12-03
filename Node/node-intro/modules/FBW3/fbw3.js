class Fbw3 {
    constructor (student, age,hobby){
        this.student = student;
        this.age = age;
        this.hobby=hobby;
    }
    studentInfo(){
        console.log('the student is ',this.student)
        console.log('and he likes to do  ',this.hobby)
    }
    abtiainAge (){
        return this.age 
    }
}
module.exports = Fbw3;