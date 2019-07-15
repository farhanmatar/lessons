function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {

        color += letters[Math.floor(Math.random() * 16)];

    }



    return color;

}


function gra(){
    firstColor = getRandomColor();
    secondColor = getRandomColor();
     thirdColot= getRandomColor();
     forthColor= getRandomColor();
     graColor =  "linear-gradient(270deg,"+ firstColor+','+ secondColor+")";
     document.getElementById("body").innerHTML ="<br>The new BackgroundColor : "+graColor;
     body.style.background=graColor;
}


let shape = document.getElementById("shape");

let start = new Date( ).getTime();
function makeShapeAppear(){
    let top=Math.random() * 200;
    let left=Math.random() * 400;
    let width=Math.random() * 200+50;

    if (Math.random() > 0.4){
        document.getElementById("shape").style.borderRadius="50%";
    }
    else{ document.getElementById("shape").style.borderRadius="0%";

    }
   
    document.getElementById("shape").style.top=top + "px";

    document.getElementById("shape").style.left=left + "px";

    document.getElementById("shape").style.width=width + "px";

    document.getElementById("shape").style.height=width + "px";

    
    document.getElementById("shape").style.display="block";
    document.getElementById("shape").style.background=getRandomColor();
    start = new Date().getTime();
}
function apearAfterDelay(){
    setTimeout(makeShapeAppear,Math.random()*20);
}

apearAfterDelay();
shape.addEventListener("mouseout",function(){

    shape.style.display="none";

    let end = new Date( ).getTime(); // after clicking on the shape

    let timetaken = (end - start) /1000;
    /* alert("your time is : "+ timetaken + " second"); */
    document.getElementById("timeTaken").innerHTML=timetaken;

    apearAfterDelay();
});