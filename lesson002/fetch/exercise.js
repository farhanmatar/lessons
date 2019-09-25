let btn1 = document.getElementById("btn1");

btn1.addEventListener("click",getPhotos);
function getPhotos(){
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(function(res){
        return res.json();
    
       })
       .then(function (data){
           console.log(data);
           document.getElementById("output").innerHTML="";   
           for(i = 0; i < 20 ; i ++){
           document.getElementById("output").innerHTML +=
           `<a href="${data[i].url}"> <img src="${data[i].thumbnailUrl}"> </a> `
           }
        
           })
          .catch(function(err){
              console.log(err);
          } )
         
           
        }