/*
Activity 5: Practical Applications

Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
*/

let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
let password1 = "Password123!";
let password2 = "password123";

let match1 = regex.test(password1);
let match2 = regex.test(password2);
console.log("Password1:", match1);
console.log("Password2:", match2);