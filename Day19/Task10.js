/*
Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.
*/

let regex = /^(https?:\/\/)?(www\.)?[\w-]+\.[a-z]{2,3}(\.[a-z]{2})?$/;
let url1 = "https://www.google.com";
let url2 = "www.google.com";
let url3 = "google.com";
let url4 = "https://google.com";
let url5 = "https://www.google";
let url6 = "https://www.google.";

let match1 = regex.test(url1);
let match2 = regex.test(url2);
let match3 = regex.test(url3);
let match4 = regex.test(url4);
let match5 = regex.test(url5);
let match6 = regex.test(url6);
console.log("URL1:", match1);
console.log("URL2:", match2);
console.log("URL3:", match3);
console.log("URL4:", match4);
console.log("URL5:", match5);
console.log("URL6:", match6);