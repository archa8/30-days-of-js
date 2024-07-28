/*
Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
*/
let arrayMax = (arr, n) => {
    if (n === 1) {
        return arr[0];
    }
    return Math.max(arr[n - 1], arrayMax(arr, n - 1));
}

let arr1 = [5, 8, 16, 4, 0];
let n1 = arr1.length;
console.log(`Maximum element in the array 1 is ${arrayMax(arr1, n1)}`);


let arr2 = [15, -60, 0, 100, 24];
let n2 = arr2.length;
console.log(`Maximum element in the array 2 is ${arrayMax(arr2, n2)}`);