let img = document.getElementById("myimg");
let btn = document.getElementById("mybtn");


function changeimg(){
    if (img.getAttribute("src")=="/JAVASCRIPT FOLDER/Events/landscape-2806202_960_720.jpg"){
          img.setAttribute("src","/JAVASCRIPT FOLDER/Events/fantasy-2995326_960_720.jpg");
   }
   else{
       img.setAttribute("src","/JAVASCRIPT FOLDER/Events/landscape-2806202_960_720.jpg");
   }
  }
  mybtn.addEventListener("click",changeimg);

/* 
 function changeImg(){
    img.setAttribute("src","http://lorempixel.com/640/480/cats");
}


btn.addEventListener('click',changeImg);  */


