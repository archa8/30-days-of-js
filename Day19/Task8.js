/*
Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
*/

let regex = new RegExp(`\\bfox\\.$`); // can also be written as (`\\b(fox)$`) 
let string1 = "The quick brown fox jumps over the lazy dog.";
let string2 = "Dog jumps over the lazy fox.";

let match1 = string1.match(regex);
let match2 = string2.match(regex);
console.log(match1);
console.log(match2);