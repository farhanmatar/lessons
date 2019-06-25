// // define Array in Javascript
// let colors= new Array ("red","blue","green","yellow","pink");

// let Colors=["red","blue","green","yellow"];

// console.log(colors);

// // adding the white color to the end of the coloe Array

// colors.push('white');

// console.log(colors);
// let mycolors=colors[0];

// let mydiv="<div style='background:"+mycolors+"' >" + mycolors + "</div>";
// let mydiv1="<div style='background:"+colors[1]+"' >" + colors [1]+ "</div>";
// let mydiv2="<div style='background:"+colors[2]+"' >" + colors [2]+ "</div>";
// let mydiv3="<div style='background:"+colors[3]+"' >" + colors [3]+ "</div>";
// let mydiv4="<div style='background:"+colors[4]+"' >" + colors [4]+ "</div>";


// document.write(mydiv);
// document.write(mydiv1);
// document.write(mydiv2);
// document.write(mydiv3);
// document.write(mydiv4);
  
// /////////////////////////////////
// using of  pop and pish in arrays

let colors=["orange","pink","green"];

console.log(colors);
colors.push("blue");
console.log(colors);
// ////////////////////////
// the arrays will be["orange","pink","green"];
// / POP is used to remove the last element we added [blue].
console.log(colors);
colors.pop();
console.log(colors) // now check the console the Blue colour will be deleted.
// POP is used to remove the last element we added [blue].
console.log(colors);
colors.pop();
console.log(colors) // now check the console the Blue colour will be deleted.
// pop is used to remove the last element 

console.log(colors);
colors.pop();
console.log(colors);
let col=colors.pop();
console.log(col);
console.log(colors);
// shift and unshift
let fruits=["apple","banana","mango"];
// shift used to remove an element to the arrays
console.log(fruits);
fruits.shift();
console.log(fruits);
// unshift is used to add element to the arrays
fruits.unshift("ananas");
console.log(fruits);
fruits.unshift("blueberries","avocados");
console.log(fruits);
fruits.push("lemon","carrot")
console.log(fruits); 
// indexof is used to get the index of an element to the arrays
console.log(fruits.indexOf("orange"));
console.log(fruits); 
// [ "blueberries", "avocados", "ananas", "banana", "mango", "lemon", "carrot" ]
//         0       ,     1    ,     2    ,    3   ,    4   ,    5   ,     6    
// we copy the element  "banana", "mango", "lemon", to new arrys using slice()
let myFruits=fruits.slice(3,4);
myFruits=fruits.slice(3,5);
console.log(myFruits); /*  [ "banana", "mango" ] */

myFruits=fruits.slice(1,6);
console.log(myFruits);

let newFruits=fruits.slice();
console.log("this is copy from the fruits");
console.log(newFruits);

// ///////////////////////////////
// splice( ) is used to delete element from an array
console.log("******** before splice*********")
console.log(newFruits);
console.log("******** before splice*********")
// [ "blueberries", "avocados", "ananas", "banana", "mango", "lemon", "carrot" ]
//         0       ,     1    ,     2    ,    3   ,    4   ,    5   ,     6    
newFruits.splice(1,3);
console.log(newFruits); /* [ "blueberries", "mango", "lemon", "carrot" ] */



// SPLICE is used to remove any element from the Array using the indexOF.
let months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']

// / forEach loop for arrys */ 
let cars=["bmw","Audi","mercedes","fiat"];
for(let i=0; i<cars.length;i++){
    document.write(cars[0]);
}
// /////////////
// with forEach()
//  cars.forEach(  function(blabla) { alert(blabla);  }    );

//  let num=[1,2,3];
//  num.forEach(  function(n) { n=n+10; alert(n);  }    );
 
// for(let i=0; i<num.length;i++){
//     num[i]=num[i]+10;
//     alert(num[i]);
// }

// let food = [ "apple","kebab","donner"];
// food.forEach (myfood);
// function myfood(foodname){
//     alert(foodname);
// }

let weekdays=["mo","tu","we","th","fr","sa","so"];
//             0  ,  1 , 2  , 3  ,  4 ,  5 ,  6 
weekdays.forEach(printdays);

function printdays(item,index)
{
    console.log(item + "    " + index );
}

function printArrDays (item,index,arr){
    console.log(item);
}
weekdays.forEach(printArrDays);

weekdays.forEach( function(item,index,arr){console.log("the day is " + item)});

// change the array element by multi every element with 9 using forEach
let numbers=[1,4,5,6,7,8,9];

 
numbers.forEach(  function(item){   console.log(item*9); }   );

let weeks=[22,33,44,55,66,77,88];
weeks.forEach( function(item) { console.log (item-10); }  );