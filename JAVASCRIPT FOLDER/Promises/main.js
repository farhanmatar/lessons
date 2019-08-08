// setTimeout(function(){location.reload(true)},4000);
let body = document.querySelector('body');
let passIn = document.createElement('input');
let button = document.createElement('button');
let mainDiv = document.createElement('div');
let ul = document.createElement('ul');
let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');
let li4 = document.createElement('li');
 
button.innerHTML = 'Enter';
mainDiv.style.width = '500px';
mainDiv.style.height = '400px';
mainDiv.style.border = '1px solid black';
body.appendChild(passIn);
body.appendChild(button);
body.appendChild(mainDiv);
mainDiv.appendChild(ul);
ul.appendChild(li1).innerHTML = '8 Char';
ul.appendChild(li2).innerHTML = 'lower case';
ul.appendChild(li3).innerHTML = 'uppercae';
ul.appendChild(li4).innerHTML = 'special characters';
let numbers = '1234567890';
let lowerCase = 'abcdefghijklmnopqrstuvw xyz';
let uppercae = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let specialCharacters = '!"§$%&/=?(){}[]^´`<>';
let alls = numbers += lowerCase += uppercae += specialCharacters;
function passwordGen(){
        let pass = '';
        for(x=0; x < 10; x++){
            let randomVar = Math.floor(Math.random() * alls.length);
            pass += alls[randomVar];
        }
        return pass;
    }
passIn.setAttribute('value',passwordGen())
button.addEventListener('click',function(){       
   let value = passIn.value;
    if (value.length >= 8 ){
        li1.innerHTML = 'Currect';
        li1.style.color = 'green';
    }else{
        li1.style.color = 'red';
        li1.innerHTML = 'Must be at least 8 characters';
    }
    if(value.match(/[a-z]/)){
        li2.style.color = 'green';
        li2.innerHTML = 'Currect';
    }else{
        li2.innerHTML = 'Must contain a lower case'
        li2.style.color = 'red';
    }
    if(value.match(/[A-Z]/)){
        li3.innerHTML = 'Currect';
        li3.style.color = 'green';
    }else{
        li3.innerHTML = 'Must contain uppercae';
        li3.style.color = 'red';
    }
    if(value.match(/\W/)){
        li4.innerHTML = 'Currect';
        li4.style.color = 'green';
    }else{
        li4.innerHTML = 'Must contain a number or a special characters'
        li4.style.color = 'red';
    }    
});
// var str = "llloooiiilet textnode=document.createTextNode(this.text);";
// var str = "llloooiiilet textnode=docume2010000000$nt.createTextNode(this.text);";
// var patt1 = /[^lll]+[io]+/i;
// var patt1 = /[0-2]+\$/;
// var result = str.match(patt1);
// console.log(result);
let str1 = 'we are in dci dci DCI dci dci dci st';
let arr1 = str1.match(/dci/ig);
// g = global
// i = insensetive
// m = Modifier
// console.log(arr1);
let str2 = 'Test_A, tEst_B, teSt_C, tesT_X, TEST_Y, test_a,test_b, test_c, test_x, test_1 test_2, test_3, test_4, test_9';
let arr2 = str2.match(/test_[aBc&1|2 ]/gi);
// console.log(arr2);
let str3 = 'color colour';
let arr3 = str3.match(/col(o|ou)r/g);
// console.log(arr3);
//Array [ "color", "colour" ]
//Metecharacters
// . 
let str4 = 'car car? car3 cars';
let arr4 = str4.match(/car./g);
// console.log(arr4);
//Array(4) [ "car ", "car?", "car3", "cars" ]
let str5 = 'car456 carRe car. car'; 
let arr5 = str5.match(/car../g);
// console.log(arr5);
//Array(3) [ "car45", "carRe", "car. " ]
let str6 = 'google.com facebook.com real.idr'; 
let arr6 = str6.match(/\w+\.com/g);
// console.log(arr6);
//Array [ "google.com", "facebook.com" ]
let str7 = 'goog5le.com  google&.it google123@@!.com goolgeIsN524otSuper.com'; 
let arr7 = str7.match(/\w+/g);
// console.log(arr7);
//[ "goog5le", "com", "google", "it", "google123", "com", "goolgeIsN524otSuper", "com" ]
// \.(com|it)
// \d <=> [0-9]  
let str8 = 'n l nn ll nnn lll nnn'; 
let arr8 = str8.match(/l+/g);
// console.log(arr8);
//Array(3) [ "l", "ll", "lll" ]
// n+
let str9 = '3 July, 3rd August'; 
let arr9 = str9.match(/3(rd)?/g);
// console.log(arr9);
//Array [ "3", "3rd" ]
//Quantifiers 
let str10 = 'n l  nn ll   nnn lll nnn'; 
let arr10 = str10.match(/ {2,3}/g);
// console.log(arr10);
//Array [ "  ", "   " ]
let str11 = 'google,it google,com google,de'; 
let arr11 = str11.match(/google+\,\w+/g);
// console.log(arr11);
//Array(3) [ "google,it", "google,com", "google,de" ]

