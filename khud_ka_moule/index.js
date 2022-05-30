
// const add = require('./opper.js');
// console.log(add(5, 5));
// console.log(sub(10, 5));


// const oper = require('./opper.js');
// console.log(oper);   // show as object and their porperty

// console.log(oper.add(5,5));
// console.log(oper.add(10,5));


// ***** object desctructuring
// const {add1, sub1, mul1} = require("./opper.js");

// console.log(add1(5,5));
// console.log(sub1(10, 5));  
// console.log(mul1(10, 5));

 // **** or ****
const {add, sub, mul, myname} = require("./opper.js");

console.log(add(5,5));
console.log(sub(10, 5));
console.log(mul(10, 5));
console.log(myname);


