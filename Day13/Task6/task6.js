// Activity 4: Using Third-Party Modules
// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.

// Install lodash by running:
// npm i -g npm
// npm i --save lodash
const _ = require('lodash');

let array1 = [1, 2, 3, 4, 5, 6, 7, 8];
let chunks = _.chunk(array1, 2);
console.log("Before chunking: ", array1);
console.log("After chunking: ", chunks);
console.log();
let array2 = [[1, 2], [3, 4], [5, 6], [7, 8]];
let flatten = _.flatten(array2);
console.log("Original array: ", array2);
console.log("Flattened array: ", flatten);