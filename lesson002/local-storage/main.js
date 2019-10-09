let field = document.querySelector("#field");

field.addEventListener("change",autosave);

function autosave(){
  let save = localStorage.setItem("save",field.value);

    console.log(field.value);
        
}
if(localStorage.getItem("save")){
    field.value = localStorage.getItem("save");
}