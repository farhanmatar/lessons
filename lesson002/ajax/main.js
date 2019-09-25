document.querySelector(".get-jokes").addEventListener("click",getJokes);
document.querySelector(".fetch-jokes").addEventListener("click",fetchJokes);
document.querySelector(".jquery-jokes").addEventListener("click",jqueryJokes);

function getJokes(e){
e.preventDefault();
console.log("get      Jokes");
let number = document.querySelector("#number").value;
console.log(number);
let xhr = new XMLHttpRequest();
xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);
xhr.onload = function(){
    if(this.status===200){
        // alert(this.status);
        let response = JSON.parse(this.responseText);
        console.log(response);
        let output='';
        if(response.type==="success"){
            response.value.forEach(function(item){
                output+= `<li>${item.joke}</li>`;
            })
            document.querySelector(".jokes").innerHTML=output;
           
        }
    }
}
xhr.send();
}
function fetchJokes(e){
    e.preventDefault();
    console.log("get  fetch ");
    let number = document.querySelector("#number").value;
    console.log(number);
    fetch(`http://api.icndb.com/jokes/random/${number}`)
    .then(function(res){
        return res.json();
       
    })
    .then(function(data){
        console.log(data);
        let output='';
        data.value.forEach(function(fetchJokes){
            output+= `<li>${fetchJokes.joke}</li>`;
        })
        document.querySelector(".jokes").innerHTML=output; 
    })
}

function jqueryJokes(e){
    e.preventDefault();
    console.log("get  jquery ");
   let url = (`http://api.icndb.com/jokes/random/${number}`)
   $.get(url,function(data,status){
       let output='';
       if(status==="success")
       data.value.forEach(function(item){
           output+= `<li>${item.joke}</li>`;
       })
       $(".jokes").html(output);
   })
}