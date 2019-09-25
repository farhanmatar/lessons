let  from = document.querySelector('#from');
let  to = document.querySelector('#to');
let  amount = document.querySelector('#amount');
let  output = document.querySelector('#output');
let click = document.querySelector('#click')
click.addEventListener('click',convert);
//  ticker: Object { base: "BTC", target: "USD", price: "9663.73777292", … }
function convert(){
   fetch('https://api.cryptonator.com/api/ticker/'+from.value+'-'+to.value)
   .then(function(data){
       return data.json();
   }).then(function(item){
       console.log(item);
        let price = item.ticker.price;
       let sum = amount.value * price;
       output.innerHTML = sum;
   })
}