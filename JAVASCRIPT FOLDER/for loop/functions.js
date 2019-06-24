var dayNumber=function(num){
    var weekday;
    switch(num){
        case 0:
        weekday = "Monday"
        break;
        case 1:
        weekday = "Tuesday"
        break;
        case 2:
        weekday = "Wednsday"
        break;
        case 3:
        weekday = "Thursday"
        break;
        case 4:
        weekday = "Friday"
        break;
        case 5:
        weekday = "Saturday"
        break;
        case 6:
        weekday = "Sunday"
        break;
        default:
        weekday="error";
    }
    if(weekday=="error"){
        return("Please enter a vaild number.")

    }else{
        return("it's " + weekday);
    }
}
for(let x=0;x<=6;x++){
    console.log(dayNumber(x));
}
let x=0;
while(x<7){
   dayNumber (x);
   x++;

}

let car3  ={name:"bmw",country:"Germany"};
let car1 ={name:"ford",country:"USA"};
let car2 ={name:"fiat",country:"Italy"};
let cars = [car1,car2,car3];
// //////////////////////////////////////
// please write a function to parse country depending on name the car 
function findCarCountry(name){
    let country;
    // somthing here, for loop, if (cars[x].name==name{country =cars[x].country})
    for(let x=0;x<cars.length; x++){
        if (cars[x].name==name) {
            country =cars[x].country;
        }
    }
    return country;

}
let newCars = ["bmw","ford","ferrari"];
function findYourCar(car){
    let found = false;
    for (let x = 0; x< newCars.length; x++ ){
        if(newCars[x]==car){
            found = true
        }
    }

    if (found) {
        console.log("Your car is found ");
    }
    else {
        console.log("Your car not found ");
    }

}


function drawTriangle (size){
    let char = prompt ("please enter the carecter ...")

    document.write('<br>');
// /////////////////////////////////////////////////////////
    for(let x=0 ; x<size ; x++){
    for( let k=0; k<=x;k++) {document.write('&nbsp;');}
    for(let j=x; j<size; j++){
    
        document.write(char);
    }
    document.write(' <br> ');
    
}

}


function farhan (name){
console.log ("myName is " + name);

}
