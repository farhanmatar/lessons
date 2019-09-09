let myDiv = document.getElementById("main");

myDiv.addEventListener("dragstart",start);
myDiv.addEventListener("dragend",end);


function start(){
    console.log("drag started");

}
function end (){
    console.log("drag ended");
}


 let destDiv = document.querySelectorAll(".destination");
 for(let div of  destDiv ){
  

 div.addEventListener("dragover",over)
 div.addEventListener("dragenter",enter)
 div.addEventListener("dragleave",leave)
 div.addEventListener("drop",drop)
 }
 function over (e){
   e.preventDefault ();
}
function enter (e){
    e.preventDefault ();
}
function leave (){
    console.log("drag leave");
}
function drop(){
    this.append(myDiv);
}





/* let myDiv = document.getElementById("main");

myDiv.addEventListener("dragstart",start);
myDiv.addEventListener("dragend",end);
myDiv.addEventListener("dragover",over);

destDiv.addEventListener("drop",drop);

function start(){
    console.log("drag started");

}
function end (){
    console.log("drag ended");
}
function over (){
    console.log("drag over event");
}
function dragDrop(){
    console.log("drop");
} */