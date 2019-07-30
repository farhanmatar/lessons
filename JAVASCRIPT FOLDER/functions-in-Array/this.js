













console.log(this);
let person = {
    firstName: "farhan",

    secoundName:"allafoi",

    fullName : function(){
        console.log(this);
        console.log("here we get the full name");
        console.log(this.firstName +" "+this.secoundName);
        this.age = 31; // adding new property to the person object
    }

};
console.log(person.firstName);
console.log(person.fullName());

let car = {
    name : "BMW",

    maxSpeed:"250",

    color : "blue",

    model: "i7"
}
car.year = 2019;

console.log(car.year);

car.info = function(){
    /* this.model =  "17"; */
    console.log(this.name + " " +this.color+ " " + this.model);
}
console.log(car.info());

let merBenz = {
    name: "mercedes",
    color:"black",
    model:"A6"
};
//we use the info function from the object car in the object merBenz
console.log(car.info.call(merBenz));
//////////////////////////////////////////////////////
let btn = document.getElementById("myBtn");
let togle = 0 ; 
btn.addEventListener("click",function(){
   
    if (togle ==0 ){
        this.style.background="red";
        this.style.color="red";
        this.style.fontSize="1.7em";
        this.style.background="#ccc";
        togle=1;
        
    }else{
        this.style.background="green";
        this.style.color="green";
        this.style.fontSize="2.0em";
        this.style.background="yellow";
        togle=0;
        // this.parentElement to remove the Btn
        // this.parentElement.remove();

    }
  
});