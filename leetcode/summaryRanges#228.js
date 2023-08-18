/**
 * @param {number []} nums
 * @return {string []}
 */

// const summaryRanges = (nums) => {
//     let result = [];
//     let left = 0, right = 0;
//     while (right < nums.length) {
//         if (nums[right] === nums[right + 1] - 1) {
//             right++;
//         } else {
//             let rangeString = '';
//             if (nums[left] !== nums[right]) {
//                 rangeString = `${nums[left]}->${nums[right]}`

//             } else {
//                 rangeString = `${nums[left]}`
//             }
//             left = right + 1;
//             right++
//             result.push(rangeString);
//         }
//     }

//     return result;
// }

//using for loop
const summaryRanges = (nums) => {
    const result = [];
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        if (right + 1 < nums.length && nums[right] + 1 === nums[right + 1]) {
            continue;
        }

        result.push(left === right ? `${nums[left]}` : `${nums[left]}->${nums[right]}`);
        left = right + 1;
    }

    return result;
};


// console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
// console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
export default summaryRanges;