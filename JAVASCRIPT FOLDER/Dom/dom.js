let h1= document.querySelector("h1");
let body=document.querySelector("body");
body.style.background="yellow";

let=iceBlue=false;
function changeColor() {
    if(iceBlue==true){
    body.style.background="blue";
}
else{
    body.style.background="red";
  }
  iceBlue=!iceBlue;
}
setInterval(function(){
    changeColor();
},1000);
changeColor();
h1.style.color="pink";
h1.style.margin="10%";