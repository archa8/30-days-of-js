/* 
Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.
*/

mergeArrays = (arr1, arr2) => {
    let final = [], i = 0; j = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            final.push(arr1[i])
            i++
        } else {
            final.push(arr2[j])
            j++
        }
    }
    while (i < arr1.length) {
        final.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        final.push(arr2[j])
        j++
    }
    return final
}

let arr1 = [1, 3, 5, 7]
let arr2 = [2, 4, 6, 8]
console.log("Merged array: ", mergeArrays(arr1, arr2))