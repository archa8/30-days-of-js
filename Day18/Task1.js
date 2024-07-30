/*
Activity 1: Sorting Algorithms

Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
*/

bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    console.log(arr)
}

let arr = [64, 34, 25, 12, 22, 11, 90]
bubbleSort(arr);