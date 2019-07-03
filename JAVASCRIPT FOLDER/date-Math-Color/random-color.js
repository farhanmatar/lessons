let p = document.getElementById('colorCode');
let div = document.getElementById('myColor');


function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {

        color += letters[Math.floor(Math.random() * 16)];

    }

    p.innerHTML = color;
    div.style.background = color;

}