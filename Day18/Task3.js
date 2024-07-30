/*
Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.
*/

partition = (arr, low, high) => {
    let pivot = arr[high]
    let i = low - 1
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
    return i + 1
}

quickSort = (arr, low, high) => {
    if (low > high) {
        return
    }
    let pivot = partition(arr, low, high)
    quickSort(arr, low, pivot - 1)
    quickSort(arr, pivot + 1, high)
}

let arr = [100, 80, 110, 90, 40]
quickSort(arr, 0, arr.length - 1)
console.log("Sorted array: ", arr)