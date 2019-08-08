let pNumber = document.getElementById("number");
let pName=document.getElementById("name");
let saveBtn=document.getElementById("save");
let delBtn=document.getElementById("delete");

saveBtn.addEventListener("click",function(){
        localStorage.setItem(pNumber.value,pName.value);
        showinfo();
});
delBtn.addEventListener("click",function(){
    localStorage.clear();
    
});
 /* This function is to show you all info that we put it inside the Local storage  */
 function showinfo(){
    let storage =localStorage;
    for (let i=0; i<storage.length; i++){
       console.log(storage.key(i)+ " : " +storage.getItem(storage.key(i)))
    }
  };
//   //////////////////////////////////////////////////////////
let cars=[];
let brand=document.getElementById("brand");
     let add=document.getElementById("add");
    
     let name=document.getElementById("name");
     let add1=document.getElementById("add1");
     
     let age=document.getElementById("age");
     let add2=document.getElementById("add2");

     let Job=document.getElementById("Job");
     let add3=document.getElementById("add3");

     let City=document.getElementById("City");
     let add4=document.getElementById("add4");
    

     add.addEventListener("click",function(){
       cars.push(brand.value);
       localStorage.setItem("cars",cars);
       document.getElementById("cars").innerHTML=localStorage.getItem("cars");
     });
     
     add1.addEventListener("click",function(){
        cars.push(name.value);
        localStorage.setItem("cars",cars);
        document.getElementById("cars").innerHTML=localStorage.getItem("cars");
      });


     add2.addEventListener("click",function(){
        cars.push(age.value);
        localStorage.setItem("cars",cars);
        document.getElementById("cars").innerHTML=localStorage.getItem("cars");
      });

     add3.addEventListener("click",function(){
        cars.push(Job.value);
        localStorage.setItem("cars",cars);
        document.getElementById("cars").innerHTML=localStorage.getItem("cars");
      });

     add4.addEventListener("click",function(){
        cars.push(City.value);
        localStorage.setItem("cars",cars);
        document.getElementById("cars").innerHTML=localStorage.getItem("cars");
      });