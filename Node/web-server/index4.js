const http = require ('http');
const fs = require('fs');
const server = http.createServer((request,response)=>{

   response.setHeader('Content-Type','text/html');
   
   response.setHeader('Access-Control-Allow-Origin','*');

  
   response.writeHead(200); // status code 200 / ok 
 if(request.url ==='/'){ 
   fs.createReadStream(__dirname + '/index4.html').pipe(response)
    }
    else if (  request.url ==='/api'){
      
        response.setHeader('Content-Type','application/json');
        let data ={
            firstName:'john',
            lastName:'Doe',
        };
        response.end(JSON.stringify(data));
    }
    
    console.log("you are in",request.url);
    

    response.end(data);


   
});
server.listen(1122, ()=>{
     console.log("listening on port 1122 ");
     
})