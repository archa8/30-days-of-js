/*
Activity 4: Array Algorithms

Task 8: Write a function to rotate an array by k positions. Log the rotated array.
*/

rotateArray = (arr, k) => {
    let n = arr.length
    k = k % n
    let rotated = []
    for (let i = 0; i < n; i++) rotated[(i + k) % n] = arr[i]
    for (let i = 0; i < n; i++) arr[i] = rotated[i]
}

let arr = [1, 2, 3, 4, 5, 6, 7]
let k = 3
console.log("Original array: ", arr)
rotateArray(arr, k)
console.log("Rotated array: ", arr)