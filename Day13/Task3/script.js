const {power, fibonacci, factorial} = require('./task3.js');

let b = 2;
let e = 3;
let n = 5;

let result1 = power(b, e);
let result2 = fibonacci(n);
let result3 = factorial(n);
console.log(`Power of ${b} raised to ${e} is ${result1} \nFibonacci of ${n} is ${result2} \nFactorial of ${n} is ${result3}`);