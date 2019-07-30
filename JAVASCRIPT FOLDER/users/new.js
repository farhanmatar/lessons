class Rectangle {
    constructor(height, width, color) {
        this.height = height;
        this.width = width;
        this.color = color;
       
    }
    create() {
        let myrect = document.createElement("div");
        let outDiv = document.getElementById("myrect");
        outDiv.appendChild(myrect);
        myrect.style.height=this.height;
        myrect.style.width=this.width;
        myrect.style.backgroundColor=this.color;

        
    }
}
const rect1 = new Rectangle("70px", "100px", "green");
rect1.create(); 

const rect2 = new Rectangle("70px", "100px", "red");
rect2.create(); 

class Circle extends Rectangle {
    constructor(height, width, color,radius) {
               super(height, width, color);
               this.radius=radius;
           }
    
     creatCircle(){
         let container = document.getElementById("myrect");
         let newCircle = document.createElement("div");
         container.appendChild(newCircle);
         newCircle.style.height=this.height;
         newCircle.style.width=this.width;
         newCircle.style.backgroundColor=this.color;
         newCircle.style.borderRadius=this.radius;
     
    }
 }
 const c1 = new Circle ("100px", "50px", "blue","50px") ;
 c1.creatCircle();

 

    const circleBtn = document.getElementById("circle");

    // Function for Button from Event Listener
    circleBtn.addEventListener("click",function(){
        console.log("creat")
        height=document.getElementById("height").value;
        width=document.getElementById("width").value;
        color=document.getElementById("color").value;
        radius=document.getElementById("radius").value;
        console.log(height,width,radius,color);
        const circle = new Circle(height,width,color,radius);
        circle.creatCircle();
    });

    // Function called from inside the button 
    function creat_react(){
        console.log("creat")
        height=document.getElementById("height").value;
        width=document.getElementById("width").value;
        color=document.getElementById("color").value;
        console.log(height,width,color);
        const rect = new Circle(height,width,color);
        rect.create();
    }
  
    
