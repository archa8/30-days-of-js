/* Activity 1: Basic Recursion

Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
*/
let factorial = (num) => {
    if (num === 0) {
        return 1;
    }
    return factorial(num - 1) * num;
}

console.log(`Factorial of 5 is ${factorial(5)}`);
console.log(`Factorial of 8 is ${factorial(8)}`);