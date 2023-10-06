/**
 * @param {number} n
 * @return {number}
 */
// const integerBreak = (n) => {
//     if (n === 2) return 1;

//     const dp = new Array(n + 1).fill(0);

//     //base case
//     dp[1] = 1;
//     dp[2] = 1;

//     for (let i = 3; i <= n; i++) {
//         for (let j = 1; j <= i / 2; j++) {
//             dp[i] = Math.max(dp[i], j * Math.max(i - j, dp[i - j]));
//         }
//     }

//     return dp[n];
// };



//using math

// const integerBreak = (n) => {
//     if (n <= 3) return n - 1;

//     let ans = 1;

//     while (n > 4) {
//         ans *= 3;
//         n -= 3;
//     }

//     return ans * n;
// }

const integerBreak = (n) => {
    if (n <= 3) return n - 1;

    if (n % 3 === 0) return Math.pow(3, n / 3);
    if (n % 3 === 1) return Math.pow(3, (Math.floor(n / 3) - 1)) * 4;

    return Math.pow(3, Math.floor(n / 3)) * 2;
}

// console.log(integerBreak(2));
// console.log(integerBreak(8));
// console.log(integerBreak(10));
// console.log(integerBreak(58));
// console.log(integerBreak(100));

export default integerBreak