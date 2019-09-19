var personalInfo = document.getElementById('personalInfo');
var addressInfo = document.getElementById('addressInfo');
var anotherInfo = document.getElementById('anotherInfo');
var showDiv = document.getElementById('showDiv');
var obj1;
var obj2

let username = document.getElementById('username');
let password = document.getElementById('password');

let btn = document.getElementById('btn');


let btn1 = document.getElementById('btn1');
let prev = document.getElementById('prev');

let btn2 = document.getElementById('btn2');
let prev2 = document.getElementById('prev2');

btn.addEventListener('click', function () {
    let First_Name = document.getElementById('First_Name').value;
    let Last_Name = document.getElementById('Last_Name').value;
    let Date_of_birth = document.getElementById('Date_of_birth').value;
    obj1 = {
        fName: First_Name,
        lName: Last_Name,
        birthD: Date_of_birth
    }
    console.log(obj1)
    personalInfo.style.display = 'none';
    addressInfo.style.display = 'block';
});


let Nationality = document.getElementById('Nationality').value;
let country = document.getElementById('country').value;
let city = document.getElementById('city').value;
    obj2 ={
        nat: Nationality,
        country : country,
        city : city

    }
prev.addEventListener('click', function () {
    personalInfo.style.display = 'block';
    addressInfo.style.display = 'none';
});

btn1.addEventListener('click', function () {
    addressInfo.style.display = 'none';
    anotherInfo.style.display = 'block';
});
prev2.addEventListener('click', function () {
    addressInfo.style.display = 'block';
    anotherInfo.style.display = 'none';
});
btn2.addEventListener('click', function () {
    showDiv.innerHTML = obj1.fName
    anotherInfo.style.display = 'none';
    showDiv.style.display = 'block';
});