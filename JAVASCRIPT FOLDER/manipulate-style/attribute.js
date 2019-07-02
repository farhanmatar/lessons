let link = document.querySelector("a");//we get the first link

console.log(link.getAttribute("href"));//www.google.com

//we change the href to bing .com 
link.setAttribute("href","http://www.ping.com");

console.log(link.getAttribute("href"));//www.ping.com

let img = document.querySelector("img");
let toggle=false;
function changephotofunction() { 
    if( toggle){
        img.setAttribute("src","/JAVASCRIPT FOLDER/manipulate-style/index.png");
    toggle=false;
    }else{
         img.setAttribute("src","/JAVASCRIPT FOLDER/manipulate-style/index.jpeg");
         toggle=true;
    }
   
}

