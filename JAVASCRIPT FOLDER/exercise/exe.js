let myDiv = document.getElementById("divtostyle");

let btn = document.querySelectorAll("button");


btn[0].addEventListener("mouseover",function(){ 
 btn[0].style.fontWeight="bold";
});
btn[0].addEventListener("mouseout",function(){ 
    btn[0].style.fontWeight="normal";
   });


btn[1].addEventListener("mouseover",function(){ 
    btn[1].style.fontWeight="bold";
   });
   btn[1].addEventListener("mouseout",function(){ 
       btn[1].style.fontWeight="normal";
      });


btn[2].addEventListener("mouseover",function(){ 
    btn[2].style.fontWeight="bold";
   });
   btn[2].addEventListener("mouseout",function(){ 
       btn[2].style.fontWeight="normal";
      });


btn[3].addEventListener("mouseover",function(){ 
    btn[3].style.fontWeight="bold";
   });
   btn[3].addEventListener("mouseout",function(){ 
       btn[3].style.fontWeight="normal";
      });


btn[4].addEventListener("mouseover",function(){ 
    btn[4].style.fontWeight="bold";
   });
   btn[4].addEventListener("mouseout",function(){ 
       btn[4].style.fontWeight="normal";
      });


btn[5].addEventListener("mouseover",function(){ 
    btn[5].style.fontWeight="bold";
   });
   btn[5].addEventListener("mouseout",function(){ 
       btn[5].style.fontWeight="normal";
      });
      

btn[6].addEventListener("mouseover",function(){ 
    btn[6].style.fontWeight="bold";
   });
   btn[6].addEventListener("mouseout",function(){ 
       btn[6].style.fontWeight="normal";
      });
      
btn[7].addEventListener("mouseover",function(){ 
        btn[7].style.fontWeight="bold";
       });
       btn[7].addEventListener("mouseout",function(){ 
           btn[7].style.fontWeight="normal";
          });

  
btn[0].addEventListener("click",function () { myDiv.style.fontWeight="bold"} ) ;
btn[1].addEventListener("click",function () { myDiv.style.fontStyle="italic"} ) ;
btn[2].addEventListener("click",function () { myDiv.style.fontSize="2em"} ) ;
btn[3].addEventListener("click",function () { myDiv.style.fontSize="1,5em"} ) ;
btn[4].addEventListener("click",function () { myDiv.style.color="red"} ) ;
btn[5].addEventListener("click",function () { myDiv.style.color="green"} ) ;
btn[6].addEventListener("click",function () { myDiv.style.color="yellow"} ) ;
btn[7].addEventListener("click",function () { myDiv.style.color="orange"} ) ;
