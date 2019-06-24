let j = 10;
while (j > 0) {
   document.write("While " + j + " * 9 = " + j * 9 + "<br>");
   j--;
}

document.write("<hr>")

for (j = 10; j > 0; j--) {
   document.write("For " + j + " * 9 = " + j * 9 + "<br>");
}
// ///////////////////////////////////////////////////////
// document.write("<hr>")
// let t = 0;
// let sum = 0;
// do {
//    sum = sum + t;
//    console.log("SUM = " + sum);
//    t++;

// }
// while (t < 10);
// ////////////////////////////////////////////////////////
document.write("<hr>")


for (let i = 1; i <= 5; i++) {
   for (let c = 1; c <= 5; c++); {
      document.write(' * ');
   }
   document.write('<br>');
}
// ////////////////////////////////////////////////////////
document.write("<hr>")

i = 0;

while (i <= 5) {
   c = 0;
   k = 0;
   while (k < 5 - i) {
      document.write("&nbsp");

      k++;
   }
   while (c <= i) {

      document.write("&nbsp");
      document.write("*");
      c++;
   }
   document.write('<br>');
   i++;
}
// ////////////////////////////////////////////////
let food=["kebab","doner","fish","falafel "];
console.log(food[0]);
// for(let i=0 ; i<4 ;i++){
//    alert(food[i]);
// }
food.push("chicken");
// for(let i=0; i<food.length ;i++){
//    alert(food[i]);
// }
food.push("pasta", "pizza","salat");
for(let i=0; i<food.length ;i++){
   // alert(food[i]);
}
let veggiefood =["Apple","orange","kiwi","beans","potato","Banana"];
veggiefood.push("chicken","tomato");
for(let i=0; i<veggiefood.length; i++){
if(veggiefood[i]=="chicken"){
 
   // alert("oh noo your food list is not veggeie anymore");
   // break;
}
console.log(veggiefood[1]);
}
// ///////////////////////////////////////////////
// we delete the none vegan item 
for (let i=0; i< veggiefood.length; i++){
   if(veggiefood[i]=="chicken"){
      alert("you have chichen and your list is not veggie")
      veggiefood[i]="lemon";
      alert("oh noo we change the chichen to lemon thanks !!");
      console.log(veggiefood[i]);  }
}