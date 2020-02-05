function obtain_data(){

    fetch('/products')
    .then(response =>{
        return response.json()
    }).then (data =>{
      console.log(data);
      create_table(data);
    })
}

function create_table(data){
let dataCount = data.length;
let thead_content='';
let tbody_content='';
let thead = document.getElementById('thead')
let tbody = document.getElementById('tbody')

for(var prop in data[0]){
    thead_content += `<th>${prop}</th>`
}
thead.innerHTML = thead_content ;

for (let index = 0; index < dataCount; index++) {
    tbody_content += '<tr>'
   Object.values(data[index]).forEach(element => {
    tbody_content += `<td>${element}</td>`
   });
   tbody_content += '</tr>'
}
tbody.innerHTML = tbody_content;




}

obtain_data()
