/**
 * @param {number[]} nums
 * @return {number}
 */
// const thirdMax = (nums) => {
//     let first = -Infinity, second = -Infinity, third = -Infinity;
//     const uniqueNums = new Set(nums);

//     for (const num of uniqueNums) {
//         if (num > first) {
//             third = second;
//             second = first;
//             first = num;
//         } else if (num > second && num < first) {
//             third = second;
//             second = num;
//         } else if (num > third && num < second) {
//             third = num;
//         }
//     }
//     return third !== -Infinity ? third : first;
// };

const thirdMax = (nums) => {
    const set = [...new Set(nums)];
    set.sort((a, b) => a - b);
    if (set.length < 3) {
        return set[set.length - 1]
    }

    return set[set.length - 3]
};

// console.log(thirdMax([3, 2, 1]));
// console.log(thirdMax([1, 2, 3]));
// console.log(thirdMax([1, 2]));
// console.log(thirdMax([2, 2, 3, 1]));

export default thirdMax;