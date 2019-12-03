/* const print = require('./star');
let stars =process.argv[2];
let header = process.argv[3];
print(stars,header) */

// ////////////////////////////
const print = require('./star');
let holy =process.argv.slice(2);
console.log(holy);
let stars =holy[0]
let header =holy[1]
print(stars,header)