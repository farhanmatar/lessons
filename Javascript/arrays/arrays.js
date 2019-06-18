// define Array in Javascript
let colors= new Array ("red","blue","green","yellow","pink");

let Colors=["red","blue","green","yellow"];

console.log(colors);

// adding the white color to the end of the coloe Array

colors.push('white');

console.log(colors);
let mycolors=colors[0];

let mydiv="<div style='background:"+mycolors+"' >" + mycolors + "</div>";
let mydiv1="<div style='background:"+colors[1]+"' >" + colors [1]+ "</div>";
let mydiv2="<div style='background:"+colors[2]+"' >" + colors [2]+ "</div>";
let mydiv3="<div style='background:"+colors[3]+"' >" + colors [3]+ "</div>";
let mydiv4="<div style='background:"+colors[4]+"' >" + colors [4]+ "</div>";


document.write(mydiv);
document.write(mydiv1);
document.write(mydiv2);
document.write(mydiv3);
document.write(mydiv4);
  

