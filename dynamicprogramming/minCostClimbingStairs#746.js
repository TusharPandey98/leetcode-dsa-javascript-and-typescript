/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = (cost) => {
    const n = cost.length;
    const dp = new Array(n);

    dp[0] = cost[0];
    dp[1] = cost[1];

    for (let j = 2; j < n; j++) {
        dp[j] = cost[j] + Math.min(dp[j - 1], dp[j - 2])
    }

    return Math.min(dp[n - 1], dp[n - 2]);
};


// const minCostClimbingStairs = (cost) => {
//     for (let i = cost.length - 3; ~i; i--)
//         cost[i] += Math.min(cost[i + 1], cost[i + 2])
//     return Math.min(cost[0], cost[1])
// };

// console.log(minCostClimbingStairs([10, 15, 20]));
// console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));

export default minCostClimbingStairs;