/*
Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.
*/

binarySearch = (arr, target, start, end) => {
    if (start > end) return false
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] === target) return true
    if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1)
    else return binarySearch(arr, target, mid + 1, end)
}

let arr = [2, 3, 4, 10, 40]
let target = 10
let result = binarySearch(arr, target, 0, arr.length - 1)
if (result) console.log("Target value found at index: ", arr.indexOf(target))
else console.log("Target value not found")