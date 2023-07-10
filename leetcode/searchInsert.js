/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// const searchInsert = function (nums, target) {
//     if(target <= nums[0]) return 0
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === target) {
//             return i;
//         } else if (nums[i] < target && nums[i + 1] > target )  {
//             return i + 1;
//         } 
//     }
//     return nums.length;
// };

const searchInsert = (nums, target) => {
    let min = 0, max = nums.length - 1;
    let guess = 0;

    while (min <= max) {
        guess = Math.floor((min + max) / 2);
        if (nums[guess] === target) {
            return guess;
        } else if (nums[guess] < target) {
            min = guess + 1;
        } else {
            max = guess - 1;
        }
    }
    return min;
}

// console.log(searchInsert([3,4,9,10],5));
console.log(searchInsert([1,3,5,6],2));
// console.log(searchInsert([3,4,9,10],5));
// console.log(searchInsert([1,3,5,6],2));
// console.log(searchInsert([2, 5], 1));