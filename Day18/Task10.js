/*
Activity 5: Dynamic Programming

Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.
*/

fibonacci = (n) => {
    let fib = new Array(n + 2)
    fib[0] = 0
    fib[1] = 1
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib[n]
}

let n = 9
console.log("Fibonacci number at position", n, "is ", fibonacci(n))