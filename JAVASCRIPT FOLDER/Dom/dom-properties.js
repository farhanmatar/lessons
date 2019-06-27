let tag =document.getElementById("firstItem").style.color="red";
let litTags=document.getElementsByClassName("light");// selactor with tag name
litTags[1].innerHTML="list Item 3 after editing!!"// the innerhtml of the tag
console.log(litTags[1].innerHTML);//print list item 3 after editing
litTags[0].style.color="lightgreen";// change the color of the item 2 now is 
let headingtag=document.getElementsByTagName("h1");
console.log(headingtag);// select the tag name
headingtag[0].innerHTML="change the tag"
headingTag[1].style.background="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,27,1) 35%, rgba(0,212,255,1) 100%)";
headingtag[1].style.color="white";
headingtag[1].setAttribute("id","myid");