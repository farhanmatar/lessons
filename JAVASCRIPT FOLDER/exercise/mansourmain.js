document.getElementById("personalDiv").style.display="block";
document.getElementById("addressDiv").style.display="none";
document.getElementById("profileInfo").style.display="none";
document.getElementById("resultDiv").style.display="none";



function nextDiv(e){
    e.preventDefault();
    let checkFirstName = document.getElementsByName("firstName")[0].checkValidity();
    let checkLastName = document.getElementsByName("lastName")[0].checkValidity();
    let checkBirthDate = document.getElementsByName("birthDate")[0].checkValidity();
    let checkNationality = document.getElementsByName("nationality")[0].checkValidity();
    
    let checkaddress = document.getElementsByName("address")[0].checkValidity();
    let checkhauseNumber = document.getElementsByName("hauseNumber")[0].checkValidity();
    let checzipCode = document.getElementsByName("zipCode")[0].checkValidity();
    let checpassword = document.getElementsByName("password")[0].checkValidity();
    letpasswordMatch = 
    document.getElementsByName('password')[0].value ===
    document.getElementsByName('repeatPassword')[0].value;
    
    




  

    let parentDivID = e.target.parentElement.id;
    //alert(parentDivID);
    switch(parentDivID){
        case 'personalDiv':
            if(checkFirstName && checkLastName && checkBirthDate && checkNationality ){
                
                e.target.parentElement.style.display="none";
                document.getElementById("addressDiv").style.display="block";
                document.getElementById("profileInfo").style.display="none";
                document.getElementById("resultDiv").style.display="none";

            }
            else{alert('please check your entres')}

            break;
        case 'addressDiv':
            e.target.parentElement.style.display="none";
            document.getElementById("resultDiv").style.display="none";
            document.getElementById("personalDiv").style.display="none";
            document.getElementById("profileInfo").style.display="block";
            break;
        case 'profileInfo' :
            e.target.parentElement.style.display="none";
            document.getElementById("addressDiv").style.display="none";
            document.getElementById("personalDiv").style.display="none";
            document.getElementById("resultDiv").style.display="block";

    }
   



}
function previousDiv(e){
    e.preventDefault();
     let parentDiv = e.target.parentElement.id;
     //alert(parentDiv);
     switch(parentDiv){
         case'addressDiv' :
            e.target.parentElement.style.display="none";
            document.getElementById("personalDiv").style.display="block";
            document.getElementById("resultDiv").style.display="none";
            document.getElementById("profileInfo").style.display="none";
            break;
          case 'profileInfo' : 
            e.target.parentElement.style.display="none";
            document.getElementById("addressDiv").style.display="block";
            document.getElementById("resultDiv").style.display="none";
            document.getElementById("personalDiv").style.display="none";
            break;
         case  'resultDiv' : 
            e.target.parentElement.style.display="none";
            document.getElementById("profileInfo").style.display="block";
            document.getElementById("addressDiv").style.display="none";
            document.getElementById("personalDiv").style.display="none";
            break;






                  




     }
    
}
let btns = document.querySelectorAll("button");
console.log(btns);
btns.forEach(function(item){
 
  if(item.classList.contains("next")){
      item.addEventListener("click",nextDiv);
  }
  else if (item.classList.contains('previous')){
    item.addEventListener("click",previousDiv);

  }

});
function showData(){
    let fname = document.getElementsByName("firstName")[0].value;
    let lname = document.getElementsByName("lastName")[0].value;
    let bData = document.getElementsByName("birthDate")[0].value;
    let nationality = document.getElementsByName("nationality")[0].value;
    let address = document.getElementsByName("address")[0].value;
    let hauseNum = document.getElementsByName("hauseNumber")[0].value;
    let zipeCode = document.getElementsByName("zipeCode")[0].value;
    let uName = document.getElementsByName("userName")[0].value;
    let psw = document.getElementsByName("password")[0].value;
    let imageFile = document.getElementsByName('imageFile')[0].value;

    document.getElementById("nameLable").innerText = fName + " " + lName;
    document.getElementById("birthDateLable").innerText = bData;
    document.getElementById("nationalityLable").innerText = nationality;
    document.getElementById("addressLable").innerText = address + " " +hauseNum + " " +zipeCode ;
    document.getElementById("nameLable").innerText = uName;
    document.getElementById("passwordLable").innerText = psw;
    document.getElementById("photoLable").src = imageFile.replace("c:\\fackpath\\","./images/");
    
    
}