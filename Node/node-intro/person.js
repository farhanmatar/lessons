class Person{
   constructor(name,age){
       this.name=name;
       this.age=age;
   }
   greeting(){
       console.log(`my name is ${this.name} and my age is ${this.age}`)
   }
}


 function getTime(){
     console.log( ` the time is ${new Date().getHours()}: ${new Date().getMinutes()} `)
 }
 module.exports =Person ; // defult export 
 module.exports.time = getTime; // named export