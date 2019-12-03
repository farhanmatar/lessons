const https = require('https');
const options = {
    hostname:'jsonplaceholder.typicode.com',
    port:443,
    path:'/todos/1',
    method :'GET'
}
//https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
https.get(options,(resp)=>{
    let data='';

    // recive a chunk of data 
    resp.on('data',(chunk)=>{
        data += chunk;
    });
   // the whole responsive has been recived 
   resp.on('end',()=>{
       console.log(JSON.parse(data));
   });

}).on("error",(err)=>{
    console.log("some thing  went wrong " + err.message);
});

const request = https.request(options,response =>{
    console.log(`statusCode: ${response.statusCode}`)

    response.on('data',d =>{
        console.log(JSON.parse(d));
    })
    
})
request.on('error',error =>{
    console.error(error);
    
})
request.end();