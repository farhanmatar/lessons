let main = document.getElementById("main");
class BaseItem{
    // Constructor for Class
    constructor(text){
        this.text = text;
    }
    //function inside class BaseItem 
    draw(){
        let div = document.createElement("div"); //creating div item
        let textNode = document.createTextNode(this.text); // creating text node and allocating the text
        div.style.backgroundColor = "goldenrod"; //background for div
        div.style.padding = "10px";
        div.style.margin = "5px";
        div.appendChild(textNode); //appending the textnode to div
        main.appendChild(div); // appending new div to main div
    }
 }
 
 const t1 = new BaseItem("hello there!"); //creating new baseitem with text
 t1.draw(); // using the draw function of BaseItem to draw it to the website
 
 const t2 = new BaseItem("how u doin");
 t2.draw();
  
 class StyledItem extends BaseItem{
     constructor(text,style){
         super(text);
         this.style=style;
     }
     draw(){
         let li = document.createElement("li");
         li.setAttribute("style",this.style);
         let textNode = document.createTextNode(this.text);
         li.appendChild(textNode);
         document.getElementById("main").appendChild(li);

   
     }
      
       // getter give me the value
    get itemStyle(){
        return this.style;
    }
    set restyle(style){
        this.style=style;
    }
     // setter
     set content (text){
         this.text=text;
     }
 }

 let item1 = new BaseItem("this is the item1");
 item1.draw();
 item1.content="new content for item 1";
 item1.draw();
 let item2 = new StyledItem("this is the item2","color:red;border:1px dotted blue");
 item2.draw();
 console.log(item2.itemStyle)
 item2.restyle ="color:orange; background:lightgreen";
 item2.draw();

 item2.content="the updated content of item2";
 item2.draw();
