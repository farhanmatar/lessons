let str = "Hello World";
console.log(str.length); // 11
console.log(str[0]); // h

//alert(str.charAt(6)); return charcter at soecific index  w 


console.log(str.charCodeAt(1)); //101

let str1 = "we are learning";
let str2 = "javascript";
let str3 = str1.concat(str2);

console.log(str3);

console.log("the index of javascript is " + str3.indexOf("javascript"));
console.log(str3.indexOf("php")); //return -1

str1.match("we are learning");

console.log(str3.search("we"));// 0
console.log(str3.search("le")); // 7
console.log(str3.search("t")); // 24
console.log(str3.search(str1)); // 0

console.log(str3.slice( 0,6)); // we are 
console.log(str3.slice( 8,15)); // earning

// /// split creart array from the string 

console.log(str3);

let strArray =str3.split(" ");

console.log(strArray);

let strArray2 = str3.split("*");

console.log(strArray2);
// ////////////////////////////
let str4="how*are*you";

let strArray3 = str4.split("*");
console.log(str4);
console.log(strArray3);
// /////////////


/* let arrFruit= fruit.split(" ",3);
 console.log(arrFruit);
 */

console.log(fruit.substr(0,5));
 
// split with limit
let fruit = "Apples are round and apples are juicy";

let arrFruit= fruit.split(" ",3); // we use limt just elements

console.log(arrFruit); // [ "Apples", "are", "round"]

/////////////////////////////////////////////////////////////////////
fruit.startsWith("Apples"); //true
fruit.startsWith("apples"); //false
//////////////////////////////////////////////////////////////////

// substr

console.log(fruit);
console.log("with substr(5,10) : "+fruit.substr(5,10)); // returns - "s are roun" - because substr displays 10 characters starting from position 5
console.log("with slice(5,10) : "+fruit.slice(5,10)); //returns - " s are" - because slice cuts out and displays the 5 charachters starting from position 5 to 10
//substring use start and end
console.log("substring(2)="+fruit.substring(2) ); //to the end of the strings
//ple are round and apples are juicy
console.log("fruit.substring(2,7)="+ fruit.substring(2,7)); //
//ple a
// toUpperCase()
console.log(fruit.toUpperCase()); //APPLES ARE ROUND AND APPLES ARE JUICY
// toLowerCase()
console.log(fruit.toLowerCase()); // apples are round and apples are juicy
// trim() to remove the whitespaces
let food="       Döner  Apple  Kepap  Banana";
console.log(food);
console.log(food.trim());
// toString to convert object to string
let colors=["red","green","yellow","gold"];
console.log(colors);
console.log(colors.toString());
// Declare a variable with the value of "I can walk in the park all day".
// Print the word "park" to the console

