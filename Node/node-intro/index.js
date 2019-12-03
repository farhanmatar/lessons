/* function hello(fullname){
    console.log(`Hi ${fullname} the time is
     ${new Date().getHours()} Hours and 
     ${new Date(). getMinutes()}minitues !`);
}
hello('DCI FBW3') */
const  Person =require ('./person');
const  person1 =new Person ('John Doe',32);
Person.time();
console.log(Person.time());
person1.greeting();

