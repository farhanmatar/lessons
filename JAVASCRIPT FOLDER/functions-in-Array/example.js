let btn = document.getElementById("myBtn");
let btn2 = document.getElementById("btnImg");
let img = document.getElementById("myImg");

btn.style.left="50px";
btn.style.top="0px";
btn.style.position="relative";
img.style.position="relative";
img.style.left="50px";


btn.addEventListener("click",function(){
    
    this.style.left=parseInt(this.style.left)+ 50+ "px";
    this.style.top=parseInt(this.style.top)+ 50+ "px";

  

});
function animationJs (){
    document.getElementById("myImg").animate([
        {transform : 'translateX(0px)'},
        {transform : 'translate(300px,0px)'},
        {transform : 'translate(300px,300px)'},
        {transform : 'translate(0px,300px)'},
        {transform : 'translate(0px,0px)'},

      
    ],{duration:100,iterations:Infinity }
    );

}

btn2.addEventListener("click",function(){
    animationJs();
    img.style.left=parseInt(img.style.left)+ 50+ "px";

/* let leftMove = 50;
    img.style.left= leftMove +"px";
    leftMove += 50; */
   
});





    // this.style.left="50px";