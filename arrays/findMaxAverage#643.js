/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// const findMaxAverage = (nums, k) => {
//     let maxAverage = -Infinity;
//     const numsLength = nums.length;
//     for (let j = 0; j <= numsLength - k; j++) {
//         let total = nums[j];
//         for (let l = j + 1; l < j + k; l++) {
//             total += nums[l];
//         }
//         maxAverage = Math.max((total/k) , maxAverage);
//     }
//     return maxAverage.toFixed(5)
// };

// using sliding window

// const findMaxAverage = (nums, k) => {
//     let maxSum = -Infinity;
//     let currentSum = 0;

//     for (let i = 0; i < nums.length; i++) {
//         currentSum += nums[i];

//         if (i >= k - 1) {
//             maxSum = Math.max(maxSum, currentSum);
//             currentSum -= nums[i - (k - 1)];
//         }
//     }

//     return (maxSum / k).toFixed(5);
// };

const findMaxAverage = (nums, k) => {
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    let maxAverage = sum;

    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k];
        maxAverage = Math.max(maxAverage, sum);
    }

    return maxAverage / k;
};



// console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
// console.log(findMaxAverage([5], 1));
// console.log(findMaxAverage([-1], 1));

export default findMaxAverage;