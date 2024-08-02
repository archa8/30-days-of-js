/*
Activity/Task 1: Two Sum
*/

twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return 'No two sum solution';
}

let arr1 = [2, 7, 11, 15];
let target1 = 9;
console.log(twoSum(arr1, target1));

let arr2 = [3, 2, 4];
let target2 = 6;
console.log(twoSum(arr2, target2));

let arr3 = [3, 3];
let target3 = 9;
console.log(twoSum(arr3, target3));