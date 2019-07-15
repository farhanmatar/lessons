let colors = ["red","blue","green"];

let color1 = ["orange","lightblue", "pink"];
let allColors = colors.concat(color1);

console.log(allColors); //[ "red", "blue", "green", "orange", "lightblue", "pink" ]
                        //     0      1       2        3           4          5

console.log(allColors.slice(1,3)); // [ "blue", "green" ]
 
console.log(allColors.slice(0,4)); // [ "red", "blue", "green", "orange" ]

console.log(allColors.slice(1,5)); //[ "blue", "green", "orange", "lightblue" ]

// Array.splice to add elements and to remove elements

// Array.splice (index,howmany,"item1,item2")

// if howmany = 0 then nothing will be removed 
let cars = ["bmw","ford","fiat"]; // to reset the array agin 
console.log(cars);//[ "bmw", "ford", "fiat" ]

cars.splice(0,2,"bmw","ford","fiat");
console.log(cars);// [ "mercedes", "Audi", "fiat" ]

cars.splice(1,1,"mercedes","Audi");
console.log(cars); //[ "bmw", "mercedes", "Audi", "fiat", "fiat" ]

/* ------------------------function in Array (FIND)------------------------------------- */
//Array.Find()

let food = ["banana","Apple","mango"];

function check (food){
    return food ="apple";

}
food.find(check);
console.log(food);