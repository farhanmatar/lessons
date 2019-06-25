// we create to do list array
let toDoList=["list1","list2","list3"];
// the first quistion
let userAnswer= prompt("what would you like to do?");
while(userAnswer !=="quit"){

   if(userAnswer=="list"){
    printlist();
   }
   else if(userAnswer=="new"){
       let newToDo=prompt(" add new task");
       toDoList.push(newToDo);
   }
   else if (userAnswer=="delete"){
       let newToDo = prompt('please input number to delete some element from the array ');
        toDoList.splice(newToDo,1,2,3);

   }

   userAnswer= prompt("what would you like to do?");

}
console.log("Okay you close the app!!!");

function printlist(){
    toDoList.forEach (function(item){     
        console.log(item);   
        console.log("**********************");
});
}
function addnew(){
    let newToDo=prompt("add new task");
    toDoList.push(newToDo);
    console.log(newToDo + "added to the list !!");

}
function deltodo(){
    let delIndex= prompt("wich task do you want to delete?");
    toDoList.splice(delIndex,1);
}

for (let i=0 ; i<=10;i++){
    document.write(' * ' );
}

