// console.log(document.URL);
// console.log(document.title);
// document.title = "welcome";
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent="hello";
//  console.log(document.links);
//  console.log(document.images);
//  document.images[0].src="https://picsum.photos/";
//  document.links[0].href="https://facebook.com";
   let items = document.getElementsByClassName ("list-group-item");
//  console.log(items);
//  for(let i=0 ; i<items.length ; i++){
//      items[i].getElementsByClassName.color="yellowgreen";
//  }
// items[3].innerHTML="this is the last item";
// items.style.color="red";
// let header = document.querySelector("#main-header");
// header.style.borderBottom="solid 7px red";
// console.log(header);
// let input = document.querySelector("input");
// input.placeholder="welcome to DCI";
// input.value= "hello";
let itemType= document.querySelector('input[type=submit]');
itemType.style.background="lightblue";

let item= document.querySelector(".list-group-item ");
item.style.background="blue";

let lastItem = document.querySelector(".list-group-item:last-child");
lastItem.style.background="red";

let secoundItem = document.querySelector(".list-group-item:nth-child(3)");
secoundItem.style.background="yellow";

let titles= document.querySelectorAll(".title");
titles[1].textContent=("Hello");

let odd = document.querySelectorAll("li:nth-child(odd)");
console.log(odd);
let even = document.querySelectorAll("li:nth-child(even)");
for(let i=0 ; i<odd.length ; i++){
    odd[i].style.color="#c4c4c4";
    odd[i].style.background="#eee";
}

let itemList = document.querySelector("#items");
console.log(itemList.parentNode);
 itemList.parentNode.style.background="pink";

