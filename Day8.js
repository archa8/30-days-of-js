// Activity 1: Template Literals
console.log("--Task 1--")
// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let naam = "James Bond";
let age = 30;
console.log(`Info: ${naam + " " + age}`);

console.log("--Task 2--")
// Task 2: Create a multi-line string using template literals and log it to the console.
var message = `Hello there! \nWelcome to my GitHub page. \nI hope you look around.`;
console.log(message);

// Activity 2: Destructuring
console.log("--Task 3--")
// Task 3: Use array destructuting to extract the first and second elements from an array of numbers and log them to the console.
let numbers = [1, 2, 3, 4, 5];
let [num1, num2] = numbers;
console.log(num1, num2);
// ? If we want the first and third elements, we can use let [num1, , num3] = numbers (skip the second element)

console.log("--Task 4--")
// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
let books = {
    title: 'Murder on the Orient Express',
    author: 'Agatha Christie',
    year: 1934,
    country: 'United Kingdom',
};
let { title: bookName, author: author } = books
console.log(bookName)
console.log(author)

// Activity 3: Spread and Rest Operators
console.log("--Task 5--")
// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
let array = [98, 6, 9, 32, 65]
let arr = [28, ...array, 56]
console.log(arr)

console.log("--Task 6--")
// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...args) {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
}
console.log(sum(5, 3, 8, 10))

// Activity 4: Default Parameters
console.log("--Task 7--")
// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling the function with and without the second parameter.
function f(a, b = 1) {
    return a * b;
}
console.log(f(5, 3));
console.log(f(5));

// Activity 5: Enhanced Object Literals
console.log("--Task 8--")
// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
let ac = 10805000;
let holder = 'Machiaveli';
let amount = 5000;
function details() {
    return `Account Number: ${this.ac}, Account Holder: ${this.holder}, Balance: ${this.amount}`;
}
let bank = {
    ac,
    holder, 
    amount,
    details
}
console.log(bank, '\n', bank.details());

console.log("--Task 9--")
// Task 9: Create an object with computed property names based on variables and log the object to the console.
let id = 123;
let emp = 'John Doe';
let dept = 'HR';
let yoe = 3;
let employee = {
    ['id']: id,
    ['name']: emp,
    ['department']: dept,
    ['years of experience']: yoe
}
console.log(employee);