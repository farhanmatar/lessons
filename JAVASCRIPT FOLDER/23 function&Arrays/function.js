const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// ________________Function #1

//   for(let i=0 ; i< companies.length;i++){
//   console.log(companies[i]);
// }
 companies.forEach(function(company){

     console.log(company.name)
 });
// ________________Function #2
// // ages ove 21 or older 
// let canDrive= [];
// for(let i=0 ; i< ages.length;i++){
//     if (ages [i]>=21){
//         /* console.log(ages [i]); */
//         canDrive.push(ages[i]);
       
//     }
// }
// console.log(canDrive);

// ________________Function #3

// let canDrive=ages.filter(function(age){
//      if (age>=21){
//          return true;
//      }
// });
// console.log(canDrive);
// ________________Function #4

// let canDrive= ages.filter(  (age) => age>=21  );

// console.log(canDrive);
 
// ________________Function #5

// let canDrive= ages.filter((age) => { return age >= 21});
// console.log(canDrive)

// ________________Function #6
// let canDrive= ages.filter( age => { return age >= 21});

// console.log(canDrive)
// ________________Function #7

// let canDrive= ages.filter( age => age >= 21 );
// console.log(canDrive); 

// ________________Function #8
const retalCompanies = companies.filter(function(company){
    if(company.category=="Retail"){
        return true ;

    }
    return company.category=="Retail"
});
console.log(retalCompanies);

// ________________Function #9

// const retalCompanies= companies.filter(  (company) => company.category=="Retail");
// console.log(retalCompanies);

// _______Example_________Function #10
// get 80s company
const eigtiesCompanies = companies.filter( company =>company.start >=1980 && company.end <1990 );
 
// array of companies name 
 
//______Example_________Function #11
// map 
//  const companyName=companies.map(function(company){
//      return company.name+ " " +[company.end-company.start]+ "years";
//  });
//  console.log(companyName);

//______Example_________Function #12

// const companyName = companies.map(company => `${company.name} ${company.end-company.start} years `);
// console.log(companyName);

//_______Example_________Function #13

const agesMap = ages.map(age => Math.sqrt(age))
                  .map(age => age * 2 );
                   
console.log(agesMap);

//_______Example_________Function #14

let ageSort = ages.sort();
console.log(ageSort);

//_______Example_________Function #15

agesort = ages.sort(function (a,b){
    return b-a;
});
console.log(ageSort);