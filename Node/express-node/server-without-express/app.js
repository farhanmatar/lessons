const http = require ('http');
const server =  http.createServer((request,response)=>{
    response.setHeader('Content-Type','text/plain');
    response.statusCode=200;
    response.end('Hello World');

});
server.listen(5000,()=>{
    console.log('Listening to port 5000');
})