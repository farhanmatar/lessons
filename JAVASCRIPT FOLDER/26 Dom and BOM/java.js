function loadwebsite(){

    window.location.assign("https://www.github.com");
    window.location.replace("https://www.google.com");
    window.location.href=("https://www.bing.com");

}
let myBtn = document.getElementById ("location");
myBtn.addEventListener("click",loadwebsite);


let btn = document.createElement ("button");
btn.innerHTML="learn Javascript";

btn.addEventListener("click",function(){
    window.location.href="https://www.tutorialrepublic.com/javascript-tutorial"
})
// document.body.appendChild(btn);

// document.body.addEventListener("load",setTimeout(loadwebsite,4000));

let back = document.getElementById("back")
let forward = document.getElementById("forward")
back.onclick=function(){
    window.history.back();
}
forward.onclick=function(){
    window.history.forward();
}