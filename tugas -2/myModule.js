const testmodule = require('./testmodule');
const a = 5;
const b = 5;
const sum = testmodule.sum(a,b);
const min = testmodule.min(a,b);
const multiply = testmodule.multiply(a,b);
const divide = testmodule.divide(a,b);
console.log(`number a: ${a} number b: ${b}`,{sum,min,multiply,divide})