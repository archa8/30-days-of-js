/*
Activity 1: Basic Regular Expressions

Task 1: Write a regular expression to match a simple pattern (e.g., match all occurences of the word 'JavaScript' in a string). Log the matches.
*/

const regex = /JavaScript/g;
let string = "JavaScript was initially created to “make web pages alive”. The programs in JavaScript are called scripts.";

let match = string.match(regex);
console.log(match);