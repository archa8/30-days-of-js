/*
Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
*/

const regex = /\d+/g;
let string = "The length of the rectangle is 12 cm and its width is 8 cm.";

let match = string.match(regex);
console.log(match);