class Pet {
    constructor(name,color){

        this.name=name;
        this.color=color;
    }

writeName(){document.write("pet name is "+ this.name);}
writeColor(){ document.write(`Pets color is ${this.color}`) }
getName() {return this.name;}
getColor() {return this.color;}
}
const p = new Pet("lolo","gray");
document.write(p.name);
document.write(p.color);

class Cat extends Pet {
    constructor(name,color,age ,sound){
        super(name ,color);
        this.age=age;
        this.sound=sound;
    }
    writeAge(){
        document.write(`and it is ${this.age} years old`);
    }
    sounds(){
        alert(`${this.sound}`);

    }
}
const c = new Cat ("kiki","braun",10,"meowwwwwwwwwwww");

class Dog extends Pet {
    constructor(name ,color, owner ,address){
        super(name,color);
       
        this.address=address;
        this.owner=owner;

    }
    writeowner(){
        document.write(` and it is ${this.owner} name `);

    }
    writeaddress(){
        alert(`${this.address}`)
    }
}
const s = new Dog (" shosho "," orange "," farhan "," Hamabruck ");






/* 
 writeName(){
     return "pet name is " + this.name;
 }
     
 getName(){
     return this.name;
 }


writeColor(){  
    return "pet color is " + this.color;
}
   
getColor(){
    return this.color;
}

}

let p = new Pet("Gorrila","red");
document.write(p.writeColor()); */