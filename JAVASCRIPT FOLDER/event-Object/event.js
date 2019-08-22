let btn = document.getElementById("btn");

btn.addEventListener("click",btnClick);
function btnClick(e){
    // console.log(e.target);
    setTimeout(hideDive,2000);
}
function hideDive(){
    div.style.display="none";
}
let div = document.getElementById("myDiv");
div.addEventListener("click",divClick);
function divClick(e){
    console.log(e.target.style.height);
    console.log(e.target.style.innerHTML);
}
let input = document.getElementById("fName");
input.addEventListener("keyup",inpuKeyUp);

function inpuKeyUp(e){
    document.querySelector("h1").textContent+=e.target.value;
    // console.log(e.target.value);
}
