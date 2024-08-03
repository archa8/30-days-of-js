/* 
Activity/Task 4: 3Sum
*/

threeSum = (nums, target) => {
    let result = [];
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const complement = target - (nums[i] + nums[j]);
            if (complement in hash) {
                result.push([nums[i], nums[j], complement]);
            } else {
                hash[nums[j]] = true;
            }
        }
    }
    return result;
}