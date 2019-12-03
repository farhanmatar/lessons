const http = require ('http');
const fs = require('fs');
const server = http.createServer((request,response)=>{
    console.log(request.url); 
   if(request.url){
        console.log('you requested to '+ request.url + ' page');
        
    }
    response.setHeader('Content-Type','text/html');

    response.setHeader('Access-Control-Allow-Origin','*'); 
    let message = "Node.js has a built-in module called HTTP, which allows node.js to transfer data"
    let html = fs.readFileSync(__dirname + '/index.html','utf8')
    let src="https://picsum.photos/500/500";
    html = html.replace('{message}',message);
    html = html.replace('{imgSrc}', src);

    response.writeHead(200); // status code 200 / ok 


    response.end(html);


   
});
server.listen(1122, ()=>{
     console.log("listening on port 1122 ");
     
})