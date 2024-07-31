/*
Activity 4: Assertions and Boundaries

Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
*/

let regex = new RegExp(`^The\\b`);
let string1 = "The quick brown fox jumps over the lazy dog.";
let string2 = "Quick brown fox jumps over the lazy dog.";

let match1 = string1.match(regex);
let match2 = string2.match(regex);
console.log(match1);
console.log(match2);