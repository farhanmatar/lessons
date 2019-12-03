const axios = require('axios');
/* 
axios({
    url :'https://newsapi.org/v2/everything',
    method: 'get',
    params:{ 
        apiKey:'00d72bf285b94dc49fa1b2d114a354bd',
        q:'bitcoin'
    }
})
.then (response => { console.log(response.data)})
.catch (error => { console.log(error)})  */


const NewsApi = require ('newsapi')
const newsapi = new NewsApi ('00d72bf285b94dc49fa1b2d114a354bd');

newsapi.v2.everything({
    q:'javascript',
    language:'en',

})
.then (response => { console.log(response)})
