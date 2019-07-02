let input= document.querySelectorAll("input");

function myfunction(){
    

    input[0].style.background = "pink";
}
function inputChange(number){
    input[number].style.background = "purple";
}

function inputSelect(number){
    input[number].style.background = "green"; 

}
function inputBlur(number){
    input[number].style.background = "transparent";
}
 /* function inputKeyDown(number){
   alert("you pressed a key inside the input fullname") 
}*/
function inputKeyUp(number){
    /* input[number].style.background = "#9FDFEF"; */
    console.log("the key up event:"+input[number].value);
}
function inputKeyPress(number){
    /* input[number].style.background = "#B7EF97"; */
    console.log("the key up event:"+input[number].value);
    

}

function formSubmit(){
    alert("you pressed a keyayayayayayayayfullname") 
}