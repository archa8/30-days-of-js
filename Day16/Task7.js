/* Activity 4: Recursive Search

Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases. */

let binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
    if(start > end) {
        return -1;
    }
    let mid = Math.floor((start + end) / 2);
    if(arr[mid] === target) {
        return mid;
    } else if(arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, end);
    } else {
        return binarySearch(arr, target, start, mid - 1);
    }
}

let arr = [1, 2, 8, 10, 16, 20, 25, 30];
console.log(binarySearch(arr, 5));
console.log(binarySearch(arr, 16));
console.log(binarySearch(arr, 30));
console.log(binarySearch(arr, 1));