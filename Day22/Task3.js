/*
Activity/Task 3: Container with most water
*/

mostWater = (height) => {
    let largestArea = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        const maxHeight = Math.min(height[left], height[right]);
        const currentArea = maxHeight * (right - left);
        largestArea = Math.max(largestArea, currentArea);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return largestArea;
};