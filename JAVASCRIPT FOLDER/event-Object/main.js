let input = document.querySelector("#name");
input.addEventListener("click",inputClick);

function inputClick(e){
    let myEvent = e ;
    let myEvent2 = e.clientX;
console.log(myEvent);
console.log(myEvent2);
}

input.addEventListener("keyup",inputkey);
function inputkey(e){
    let k = e ;
    console.log (k.altkey);
    document.getElementById("myDiv").innerHTML="<h1> "+e.target.value+"</h1>";


}
input.addEventListener("mousemove",mouseInput);
function mouseInput(e){
    let m = e ;
    console.log (m.offsetX);
    // document.body.style.background="rgb("+m.offsetX + ","+m.offsetY+" ,15)";
    document.body.style.background=`rgb(${+m.offsetY },${m.offsetX},66)`;
}
let form = document.querySelector("form");
form.addEventListener("submit",inputSubmit);

function inputSubmit(e){ 
    e.prventDefult();
    console.log(e.type);

   
}
