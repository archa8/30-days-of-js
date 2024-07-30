/*
Activity 2: Searching Algorithms

Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.
*/

linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            console.log("Target value found at index: ", i)
            return
        }
    }
    console.log("Target value not found")
    return -1
}

let arr = [2, 3, 4, 40, 10]
let target1 = 40
let target2 = 5
linearSearch(arr, target1)
linearSearch(arr, target2)