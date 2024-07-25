// Activity 2: Named and Default Exports
// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

let power = (b, e) => {
    if (e === 0) {
        return 1;
    }
    return b * power(b, e - 1);
}

let fibonacci = (n) => {
    if (n <= 1) {
        return n;
    }
    return (fibonacci(n-1) + fibonacci(n-2));
}

let factorial = (n) => {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

module.exports = { 
    power, 
    fibonacci, 
    factorial 
};