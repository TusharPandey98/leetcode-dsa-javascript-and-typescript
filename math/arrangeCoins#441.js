/**
 * @param {number} n
 * @return {number}
 */
// const arrangeCoins = (n) => {
//     let rowCount = 0;
//     for (let i = 1; i <= n; i++) {
//         if (i <= n) {
//             n = n - i;
//             rowCount++;
//         } else break;
//     }
//     return rowCount;
// };

//USING MATHS
// const arrangeCoins = (n) => {
//     return Math.floor((Math.sqrt(8 * n + 1) - 1) / 2);
// };

// using binary search

const arrangeCoins = (n) => {
    let left = 0, right = n;

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        const sum = (mid * (mid + 1)) / 2;

        if (sum == n) return mid;
        else if (sum < n) left = mid + 1;
        else right = mid - 1;
    }
    return right;
};


// console.log(arrangeCoins(5));//2
// console.log(arrangeCoins(4));//2
// console.log(arrangeCoins(3));//2
// console.log(arrangeCoins(8));//3

export default arrangeCoins;