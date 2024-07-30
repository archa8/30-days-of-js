/*
Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
*/

swap = (arr, i, j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

selectionSort = (arr, n) => {
    let i, j, minIndex
    for (i = 0; i < n; i++) {
        minIndex = i
        for (j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        swap(arr, minIndex, i)
    }
}

print = (arr, n) => {
    for (let i = 0; i < n; i++) {
        console.log(arr[i] + " ")
    }
}

let arr = [4, 88, 10, 5, 1, 64, 23]
let n = arr.length
selectionSort(arr, n)
console.log("Sorted array: ")
print(arr, n)