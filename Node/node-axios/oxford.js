const axios = require('axios');

const app_id='65e912d1'
const app_key='3a2e1b7e29bcdb3a735cda4520ea1e59'
let wordId= 'good'
let fields='pronunciations'
let strictMatch='false'

let options={
    url:'https://od-api.oxforddictionaries.com'+ '/api/v2/entries/en-gb/' 
    + wordId + '?fields=' + fields + '&strictMatch=' + strictMatch,
    method: "GET",
    headers: {
        'app_id': app_id,
        'app_key': app_key
      }
    };


axios(options)

.then(response=>{console.log(response.data)}).catch(
    (err)=>{
        console.log(err);
    }
)