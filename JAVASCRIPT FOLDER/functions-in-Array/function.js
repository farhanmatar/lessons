function greeting ()
{
    console.log("hello world");

}
// call the function
greeting();

// function with argument
function sayHi(messge){
     console.log( messge);
 }    
   

sayHi("good morning"); // call the function with message
let m= "Hi good morning"; // new variable
sayHi (m);  // call the function with argument = variable m

//////////////////////////////////////////////////////////////////////
 
function getMax(num1,num2){
    console.log("the value of the first parameter is :"+ arguments[1]);
    console.log("the count of the parameter is "+arguments.length)
    if(num1>num2){
        console.log(num1);
    }
    else{
        console.log(num2);
    }
}
// with out defining parameters but callable with value 

function getMax1(){
    if(arguments[0]> arguments[1]){
        console.log(arguments[0]);
    }
    else{
        console.log(arguments[1]);
    }
}
getMax1(1,9);// 9

function getMax3(){

    let max = 0;
    for(let i = 0 ; i < arguments.length;i++){
        console.log('Run Number ' + i + " comparing " + arguments[i] + " current max: " + max);
        if (arguments[i]> max){
            max=arguments[i];
            console.log('max changed to ' + max);
        } else {
            console.log('nothing changed!')
        }
    }
    console.log(max);
}

document.getElementById("maxNumber").innerHTML = getMax3(1,5,88,999,10,500);