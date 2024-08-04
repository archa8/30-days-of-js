/*
Activity/Task 3: Trapping Rain Water
*/

maxWater = (arr, n) =>{
    let left = 0;
    let right = n - 1;
    let l_max = 0;
    let r_max = 0;
    
    let result = 0;
    while (left <= right)
    {
        if(r_max <= l_max)
        {
            result += Math.max(0, r_max - arr[right]);
            r_max = Math.max(r_max, arr[right]);
            right -= 1;
        }
        else
        {
            result += Math.max(0, l_max - arr[left]);
            l_max = Math.max(l_max, arr[left]);
            left += 1;
        }
    }
    return result;
}