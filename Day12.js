// Activity 1: Basic error handling with Try-Catch
// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function f1() {
    throw new Error("Task 1 failed!!!");
}
try {
    f1();
} catch (error) {
    console.log("Error occurred: ", error.message);
}

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
function f2(a, b) {
    if (b == 0) {
        throw new Error("Logical Error: Division by zero is not allowed");
    }
    return a / b;
}
try {
    console.log(f2(5, 0));
} catch (error) {
    console.log(error.message);
}

//Activity 2: Finally Block
// Task 3: Write a script that includes a try-catch and a finally block. Log the messages in the try, catch, and finally blocks to observe the execution flow.
function f3() {
    try {
        console.log("I am inside the try block");
        throw new Error("Error encountered");
    } catch (error) {
        console.log("Currently inside the catch block...");
        console.error(error.message);
    } finally {
        console.log("This statement will always execute");
    }
}
f3();

// Activity 3: Custom Error Objects
// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class Error1 extends Error {
    constructor(message) {
        super(message);
        this.name = "Error1";
    }
}

function f4() {
    throw new Error1("Custom Error: Task 4 failed!!!");
}

try {
    f4();
} catch (error) {
    console.log(error.message);
}

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
class Error2 extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

function f5(input) {
    if (typeof input !== "string" || input.trim() === "") {
        throw new Error2("Custom Error: Invalid input. Enter a non-empty string.");
    }
}

try {
    let input = "";
    f5(input);
    console.log("Valid input:", input);
} catch (error) {
    console.log(error.message);
}

// Activity 4: Error Handling in Promises
// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
function random() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const num = Math.random();
            if (num > 0.5) {
                resolve("Task 6 successful!!! Promise resolved.");
            } else {
                reject(new Error("Promise rejected!"));
            }
        }, 1000);
    });
}

random()
    .then((resolution) => console.log(resolution))
    .catch((error) => console.error(error.message));

// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
async function random2() {
    try {
        const response = await random();
        console.log(response);
    } catch (error) {
        console.error(error.message);
    } 
}
random();

// Activity 5: Graceful Error Handling in Fetch
// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate message to the console.
const url = "https://lonckedin.com";

fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error("ERROR: Task 8 failed!!!");
        }
        return response.json();
    })
    .then((data) => {
        console.log("Data received:", data);
    })
    .catch((error) => {
        console.error(error.message);
    });

// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
async function fetchData() {
    const url = "https://piratehaven.com";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("ERROR: Task 9 failed!!!");
        }
        const data = await response.json();
        console.log("Data received:", data);
    } catch (error) {
        console.error(error.message);
    }
}
fetchData();