/**
 * @param {number[]} nums
 * @return {number}
 */
// const findLHS = (nums) => {
//     const numberMap = new Map();


//     for (let i = 0; i < nums.length; i++) {
//         numberMap.set(nums[i], (numberMap.get(nums[i]) + 1) || 1);
//     }

//     if (numberMap.size < 2) return 0;

//     let maxLHS = 0;

//     for (const [key, value] of numberMap) {
//         if (key) {
//             if (numberMap.has(key + 1)) {
//                 maxLHS = Math.max(value + numberMap.get(key + 1), maxLHS)
//             }
//         };
//     }

//     return maxLHS;
// };

//more optimized

const findLHS = (nums) => {
    const numberCount = new Map();
    let maxSubsequenceLength = 0;

    // Count the occurrences of each number
    for (const num of nums) {
        numberCount.set(num, (numberCount.get(num) || 0) + 1);
    }

    // Iterate through unique numbers in the array
    for (const num of numberCount.keys()) {
        if (numberCount.has(num + 1)) {
            const subsequenceLength = numberCount.get(num) + numberCount.get(num + 1);
            maxSubsequenceLength = Math.max(maxSubsequenceLength, subsequenceLength);
        }
    }

    return maxSubsequenceLength;
};



// console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
// console.log(findLHS([1, 2, 3, 4]));
// console.log(findLHS([1, 1, 1, 1]));
// console.log(findLHS([-1,0,-1,0,-1,0,-1]));//7

export default findLHS;
