export default class Developer{
    constructor(name,age,job){
        this.name = name;
        this.age = age;
        this.job = job;
    }
}
let woman= {
    "name":"holly","age":22,"hobby":"drwing"
}

function printName(faro){
    console.log(`the name is ${faro.name}`);
}
function printAge(faro){
    console.log(`the age is ${faro.age}`);
}
function printJob(faro){
    console.log(`the job is ${faro.job}`);
}
export{printName,printAge,printJob,woman};

