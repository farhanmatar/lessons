const axios = require('axios'); 

/* axios.get('https://reqres.in/api/users')
.then((response)=>{

    // success
    console.log(response.data);
    
})
.catch(function(err){
//error
console.log(err);
 }) */

 axios({
    method:'GET',
    url:'https://reqres.in/api/users'
}).then(response=>{console.log(response.data)}).catch(
    (err)=>{
        console.log(err);
    }
)