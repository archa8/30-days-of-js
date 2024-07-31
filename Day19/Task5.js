/*
Activity 3: Grouping and Capturing

Task 5: Write a regular expression to capture the area code, central office code, and the line number from a US phone number format (e. g., (123) 456-7890). Log the captures.
*/

const regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
let phoneNumber = "(123) 456-7890";

let match = phoneNumber.match(regex);
console.log("Area code:", match[1]);
console.log("Central office code:", match[2]);
console.log("Line number:", match[3]);