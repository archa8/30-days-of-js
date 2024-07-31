/*
Activity 2: Character Classes and Quantifiers

Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
*/

const regex = /\b[A-Z]\w*/g;
let string = "The quick brown Fox jumps over the lazy Dog.";

let match = string.match(regex);
console.log("Words starting with a capital letter:", match);