let myDiv = document.getElementById("main");

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
}