/*
Task 2: Write a reglar expression to match all digits in a string. Log the matches.
*/

const regex = /\d/g;
let string = "I have 2 cats and 3 dogs.";

let match = string.match(regex);
console.log("Nos. found in the string:", match);