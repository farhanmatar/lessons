let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
//let btn4 = document.querySelector("#btn4");
let addPost = document.querySelector("#addPost");

btn1.addEventListener("click",getText);
btn2.addEventListener("click",getUsers);
btn3.addEventListener("click",getPosts);
btn3.addEventListener("submit",createPost);
function getText(){
    fetch("test2.txt")
    .then(function(res){
        return res.text();

    })
    .then(function(data){
        console.log(data);
        document.getElementById("output").innerText=data;

    } )
   
  
}
function getUsers(){
    fetch("user2.json")
    .then(function(res){
        return res.json();
    
       })
       .then(function (data){
           console.log(data);
           let output= "<h2>Users</h2>";
           data.forEach(function(user){
               output +=`
              <ul>
                  <li>${user.id}</li>
                  <li>${user.name}</li>
                  <li>${user.email}</li>


              </ul>
              `;
              document.getElementById("output").innerHTML=output;              
            
           }
           )
           
       }
       )
}

function getPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(res){
        return res.json();
    
       })
       .then(function (data){
           console.log(data);
           let output= "<h2>Posts</h2>";
           data.forEach(function(post){
               output +=`
               <div>
                   <h3>${post.title}</h3>
                   <p>${post.body}</p>  
               </div>
               `;
              document.getElementById("output").innerHTML=output;              
            
           }
           )
           
       }
       )
}
// async await in js

async function  getAllUsers(){
    let response = await fetch("https://jsonplaceholder.typicode.com/users");

    //only proceed if the responce is resolved

    let data = await response.json();
    //only proceed if the data resolved

    return data;
}
getAllUsers().then(function(users){

    console.log(users);
    let output="<h2> All users from API</h2>";
    users.forEach(function(user){
        output += `
        <div>
            <h3>${user.id}</h3>
            <p>Name ${user.email}</p>
            <p> Email ${user.address.street}</p>
            <p> Street ${user.address.street}</p>
            <p> city ${user.address.city}</p>
        </div>
        `;
    });
    document.getElementById("output").innerHTML=output;               

});

function createPost(e){
    e.preventDefault();
    let title = document.querySelector("#title").value;
    let body = document.querySelector("#body").value;
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method :'POST',
        headers : {
            'Accept':'application/json, text/json ,*/* ',
            'Content-type':'application/json'

        },
        body:JSON.stringify( {title:title,body:body} )

    })
    .then(function(res){
    return res.json();
       })
       .then(function(data){
           console.log(data);
       }

       )
 
}
