
const request = require('request');

const axios = require('axios')

let url='http://api.openweathermap.org/data/2.5/weather?q=berlin&appid=2c8c26c06e37d75f50f93a9d7fd17e6f'

axios.get(url).then(response=>{
    console.log(response.data);
    
  }).catch(error =>{
    console.log(error);
    
  })