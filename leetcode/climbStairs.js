/**
 * @param {number} n
 * @return {number}
 */
// const climbStairs = function (n) {
//     if (n < 1) return 0;
//     let f0 = 0, f1 = 1, f2 = 0;
//     for (let i = 0; i < n; i++) {
//         f2 = f0 + f1;
//         f0 = f1;
//         f1 = f2;
//     }
//     return f2;
// };

// const climbStairs = (n) => {
//     // base cases
//     if (n <= 0) return 0;
//     if (n == 1) return 1;
//     if (n == 2) return 2;

//     one_step_before = 2;
//     two_steps_before = 1;
//     all_ways = 0;

//     for (let i = 2; i < n; i++) {
//         all_ways = one_step_before + two_steps_before;
//         two_steps_before = one_step_before;
//         one_step_before = all_ways;
//     }
//     return all_ways;
// }

//Dynamic programming approach
const climbStairs = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }

    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

// console.log(climbStairs(2));
// console.log(climbStairs(3));
// console.log(climbStairs(4));
// console.log(climbStairs(5));

export default climbStairs;