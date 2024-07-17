function oddEven(n) { // Task 1: Write a function to check if a number is even or odd and log the result to the console.
    if (n % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
let a = oddEven(4);
console.log(a);

function square(n) { // Task 2: Write a function to calculate the square of a number and return the result.
    return n * n;
}
let b = square(5);
console.log(b);

let c = function maximum(a, b) { // Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log(c(5, 6));

let d = function concatenate(a, b) { // Task 4: Write a function expression to concatenate two strings and return the result.
    return a + b;
}
console.log(d("Hello ", "World"));

add = (a, b) => a + b; // Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
console.log(add(5, 6));

char = (str, ch) => { // Task 6: Write an arrow function to check if a string contains a specific character and retum a boolean value.
    return str.includes(ch);
}
console.log(char("Archa", "a"));

function product(a, b = 8) { // Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
    return a * b;
}
console.log(product(5));

function greeting(name, age) { // Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
    return `Hey ${name}! It's your ${age}th birthday.`;
}
console.log(greeting("Archa", 20));

let hof1 = function f1(n, f) { // Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
    for (let i = 0; i < n; i++) {
        f();
    }
}
function test() {
    console.log("test");
}
hof1(5, test);

hof2 = (f1, f2, n) => { // Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
    let res = f1(n);
    return f2(res);
}
function square(n) {
    return n * n;
}
function divide(n) {
    return n / 10;
}
console.log(hof2(square, divide, 5));