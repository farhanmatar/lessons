// alert(document.documentElement.getAttribute("lang"));
document.write("HELLO WORLD");

// document.body.innerHTML="body";
// document.body.innerHTML="hello";
let elementName = document.body.firstElementChild.nodeName;
// alert (elementName);
document.body.firstElementChild.innerHTML="hiiiiiii";
let h1 = document.body.childNodes[0];
let h2 = document.createElement("h2");
h2.innerHTML="the first h2";
document.body.insertBefore(h2,h1);
// ///////////////////////////////////////////

//  we will change the background of the P with class test to yellow
let matches = document.getElementsByClassName("test");
for ( let i = 0; i < matches.length;i++){
    matches[i].style.background="green"
}
//  we will change the color all P to #fff
/* for (let i in matches){
    matches[i].style.color="#fbf";

 } 
document.body.firstElementChild.innerHTML="This is a paragraph of text.";
let p = document.createElement("p");
p.innerHTML="This is a paragraph of text";
document.body.insertBefore(p,p);
*/

//++++++++ this is how to insert new element P before the last elements we have in the HTML page +
let lastGreenP = matches[matches.length-1]; // we selacted the last green element 
let newRedP = document.createElement("p");
newRedP.innerHTML="new Red Paragraph";
newRedP.style.background="red";
document.body.insertBefore(newRedP,lastGreenP);

// ////////////////////////////////////////////////
let paragraph= document.getElementsByTagName("p");
console.log(paragraph.length);
// we will change the font for all p to bold using for loop

for(let i= 0 ; i < paragraph.length;i++){
paragraph[i].style.fontWeight="bold";
paragraph[i].style.border="1px solid black";

}