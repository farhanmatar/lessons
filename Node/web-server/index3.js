const http = require ('http');
const fs = require('fs');
const server = http.createServer((request,response)=>{

   response.setHeader('Content-Type','text/html');
   
   response.setHeader('Access-Control-Allow-Origin','*');

   response.writeHead(200); // status code 200 / ok 

    let data =  `<div>
               <h1 style="color:green">welcome to nodejs  </h1>
               <img src="https://picsum.photos/500/500" />
                  </div>`
    
    


    response.end(data);


   
});
server.listen(1122, ()=>{
     console.log("listening on port 1122 ");
     
})