let htag= document.getElementsByTagName("h1");
htag[0].style.color="blue";
htag[1].style.color="lightblue";
htag[0].style.border="5px solid red";
htag[2].style.border="5px solid lightgreen";
htag[1].style.backgroundColor="yellow";
htag[2].style.backgroundColor="orange";
htag[0].classList.add("light");
let paragraph=document.getElementsByTagName("p");
paragraph[0].classList.add("light");
// par[0].classList.add('light');
// par[0].classList.add('bg');

// getting the text content 

let pClass=document.querySelector(".light");
// pClass[0].style.color="red";
// pClass[1].style.color="red";
let allparagraph=document.querySelectorAll("p");
allparagraph.forEach(element => {
    element.style.color="red";
    element.style.border="5px solid aqua";
    element.style.backgroundColor="lightgreen";
});