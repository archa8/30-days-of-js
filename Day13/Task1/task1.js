// Activity 1: Creating and Exporting Modules
// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.

let sum = (a, b) => {
    return a + b
}

module.exports = sum;