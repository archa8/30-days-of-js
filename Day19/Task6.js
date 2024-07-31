/*
Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.
*/

const regex = /(\w+)@(\w+\.\w+)/;
let email = "johndoe123@gmail.com";

let match = email.match(regex);
console.log("Username:", match[1]);
console.log("Domain:", match[2]);