
       class Rectangle {
           constructor(height,width,color){
               this.height=height;
               this.width=width;
               this.color=color;
               this.newDiv=document.createElement("div");
           }

           create(){
               let mainDiv = document.getElementById("mainDiv");
               mainDiv.appendChild(this.newDiv);
               this.newDiv.style.height=this.height;
               this.newDiv.style.width=this.width;
               this.newDiv.style.background=this.color;
               this.newDiv.style.float = "left";
           }
       }

       class Circle extends Rectangle{
           constructor(height,width,color,radius){
               super(height,width,color);
               this.radius = radius;             

           }

           createCircle(){             
               this.create();
               this.newDiv.style.borderRadius=this.radius;

           }
       }



       const circleBtn = document.getElementById("circle");
       circleBtn.addEventListener("click",function(){
        let height=document.getElementById("height").value;
        let width=document.getElementById("width").value;
        let color=document.getElementById("color").value;
        let radius = document.getElementById("radius").value;
        let circle = new Circle(height,width,color,radius);
        circle.createCircle();
       })

       const rectBtn = document.getElementById("rectangle");
       rectBtn.addEventListener("click",function(){
           let height=document.getElementById("height").value;
           let width=document.getElementById("width").value;
           let color=document.getElementById("color").value;
           let rect = new Rectangle(height,width,color);
           rect.create();
       });




        
    
    
    
    
    
    
 