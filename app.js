// Require module at top of program 
var number = require('./factorial.js'); 

// We're able to access methods/constants on the object created by the require 
var n = 4; 
console.log(`The factorial of ${n} is ${number.factorial(n)}`);
console.log(`${number}.msg}`);