const axios=require("axios");
const language='en-gb';
const wordId = process.argv[2];
axios({
    url:'https://od-api.oxforddictionaries.com:443/api/v2/entries/'+language+"/"+wordId,
    method:'GET',
   headers:{
        app_key:'3a2e1b7e29bcdb3a735cda4520ea1e59',
        app_id:'65e912d1',
    }
}).then(response=>{
        let info= response.data.results[0].lexicalEntries[0].entries[0].senses
        console.log(info);
        info.forEach((element,index) => {
            console.log(index+'. :'+element.definitions)
        });
}).catch(err=>{
    console.log(err);
})