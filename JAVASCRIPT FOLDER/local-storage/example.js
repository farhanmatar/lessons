let pNumber = document.getElementById("number");
let pName=document.getElementById("name");
let saveBtn=document.getElementById("save");

saveBtn.addEventListener("click",function(){
        localStorage.setItem(pNumber.value,pName.value);

});