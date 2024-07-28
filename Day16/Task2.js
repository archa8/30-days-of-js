/* Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases. */
let fibonacci = (n) => {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

console.log(`Fibonacci number at position 5 is ${fibonacci(5)}`);
console.log(`Fibonacci number at position 2 is ${fibonacci(2)}`);
console.log(`Fibonacci number at position 1 is ${fibonacci(1)}`);
console.log(`Fibonacci number at position 0 is ${fibonacci(0)}`);