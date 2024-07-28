/* Task 8: Write a recursive function to count the occurences of a target element in an array. Log the result for a few test cases. */
let occur = (arr, target) => {
    if(arr.length === 0) {
        return 0;
    }
    if(arr[0] === target) {
        return 1 + occur(arr.slice(1), target);
    } else {
        return occur(arr.slice(1), target);
    }
}

let arr = [1, 1, 1, 5, 6, 6, 2, 8]
console.log(occur(arr, 1));
console.log(occur(arr, 6));
console.log(occur(arr, 2));