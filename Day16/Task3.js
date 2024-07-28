/* Activity 2: Recursion with Arrays

Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
*/

let arraySum = (arr, n) => {
    if (n === 0) {
        return 0;
    }
    return (arraySum(arr, n - 1) + arr[n - 1]);
}

let arr1 = [1, 2, 3, 4, 5];
let n1 = arr1.length;
console.log(`Sum of all elements in the array is ${arraySum(arr1, n1)}`);

let arr2 = [5, 6, 9, 20, 24];
let n2 = arr2.length;
console.log(`Sum of all elements in the array is ${arraySum(arr2, n2)}`);