/*
Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.
*/

max = (a, b) => a > b ? a : b

knapsackProfit = (W, wt, val, n, dp) => {
    if (n == 0 || W == 0) 
        return 0
    if (dp[n][W] != -1) 
        return dp[n][W]
    if (wt[n - 1] > W) 
        return dp[n][W] = knapsackProfit(W, wt, val, n - 1, dp)
    else 
        return dp[n][W] = max(val[n - 1] + knapsackProfit(W - wt[n - 1], wt, val, n - 1, dp), knapsackProfit(W, wt, val, n - 1, dp))
}

knapsack = (W, wt, val, n) => {
    let dp = new Array(n + 1).fill(-1).map(() => new Array(W + 1).fill(-1))
    return knapsackProfit(W, wt, val, n, dp)
}

let profit = [60, 100, 120]
let weight = [10, 20, 30]
let W = 50
let n = profit.length
console.log("Maximum value that can be obtained: ", knapsack(W, weight, profit, n))