/**
 * @param {number[]} nums
 * @return {number}
 */
// const findLengthOfLCIS = (nums) => {
//     let left = 0, right = 1, ans = 1;
//     let longest = 1;

//     for (let j = left; j < nums.length - 1; j++) {
//         if (nums[left] < nums[right]) {
//             ans += 1;
//             longest = Math.max(longest, ans);
//         } else {
//             ans = 1;
//         }

//         left++;
//         right++;
//     }

//     return longest;
// };

// more optimized and concise

const findLengthOfLCIS = (nums) => {
    let longest = 1;
    let current = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            current++;
            longest = Math.max(longest, current);
        } else {
            current = 1;
        }
    }

    return nums.length === 0 ? 0 : longest;
};


// console.log(findLengthOfLCIS([1, 3, 5, 4, 7]));//3
// console.log(findLengthOfLCIS([1, 3, 5, 6, 7]));//5
// console.log(findLengthOfLCIS([2, 2, 2, 2, 2]));//1
// console.log(findLengthOfLCIS([1, 2, 1, 2, 3]));//3

export default findLengthOfLCIS;
