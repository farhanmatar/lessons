function start() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
 }
 
 start();
 
 //////////////////////////////
 
 function start2() {
    for (let i = 0; i < 5; i++) {
        if (true) {
            // var is needed for the variable to be referenced
            // outside of this statement
            var color = "blue";
        }
    }
    console.log(color);
 }
 
 start2();
 
 ////////////////////////////////////
 
 var myColor = "red"; //is visible through console window.myColor
 let age = 30; //is not visible
 
 const myName = "Natalie"; // constant, this Value never changes
 
 console.log(myName);
 ///////////////////////////////////////////////////////////////
 // const object 
 const car = { 
     name: "Mercedes",
     color :" black",
     model:"amg",
     year:2019,
     age:9,
     carInfo:function(){

    }

};


 car.name="BMW";
 console.log(car.name);
 console.log(car.year);

 console.log(car);

 ////////////////////////
 ///////// const Array

 const drink = [ "water","coffe","milk","tea"];

 console.log(drink);

 drink[0]="lemon juice";

 console.log(drink);

 drink = ["green tea","beer","cappaccino","tea"];// EROR not Allowed

 console.log(drink);