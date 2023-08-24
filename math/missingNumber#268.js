/**
 * @param {number[]} nums
 * @return {number}
 */
// const missingNumber = (nums) => {
//     let numsTotal = 0, originalToatal = 0, numsLength = nums.length;
//     nums.forEach(num => {
//         numsTotal += num;
//     })
//     originalToatal = ((numsLength) * (numsLength + 1)) / 2;

//     return (originalToatal - numsTotal);
// };


//more optimized version
const missingNumber = nums => {
    const numsTotal = nums.reduce((total, num) => total + num, 0);
    const expectedTotal = (nums.length * (nums.length + 1)) / 2;

    return expectedTotal - numsTotal;
};

//using bit manipualtion
// const missingNumber = (nums) => {
//     let xor = 0, i = 0;
//     for (i = 0; i < nums.length; i++) {
//         xor = xor ^ i ^ nums[i];
//     }
//     return xor ^ i;
// }

// console.log(missingNumber([0, 1]));
// console.log(missingNumber([0, 1, 3]));
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));

export default missingNumber;