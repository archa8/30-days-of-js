let arr1 = [1, 2, 3, 4, 5]; // Task 1
console.log(`Array: ${arr1}`);

let f = arr1[0]; // Task 2
let l = arr1[arr1.length - 1];
console.log("The first and last elements of the array are: ", f, l);

arr1.push(6); // Task 3
console.log("Array after push(): ", arr1);

arr1.pop(); // Task 4
console.log("Array after pop():", arr1);

arr1.shift(); // Task 5
console.log("Array after shift operation: ", arr1);

arr1.unshift(8); // Task 6
console.log("Array after unshift operation: ", arr1);

let arr2 = arr1.map(x => { // Task 7
    return x * 2;
});
console.log("New array after doubling each element: ", arr2);

let arr3 = arr1.filter(ele => ele % 2 == 0); // Task 8
console.log("Filtered array after removing odd elements: ", arr3);

let arr4 = arr1.reduce((sum, element) => sum + element); // Task 9
console.log("Sum of all elements in the array: ", arr4);

console.log("Array iteration using for loop: "); // Task 10
for (let i = 0; i < arr1.length; i++) {
    process.stdout.write(arr1[i] + " ");
}

console.log("\nArray iteration using forEach: "); // Task 11
arr1.forEach(element => {
    console.log(element);
});

let marks = [ 
    ['Networks', 100],
    ['OOPs', 95],
    ['Operating Systems', 96],
    ['Database Management Systems', 94],
    ['Computer Architecture', 91]
]; // Task 12
console.log("Marksheet: ", marks);

console.log("Accessing a specific element:", marks[2][0]); // Task 13