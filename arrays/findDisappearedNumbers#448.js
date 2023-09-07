/**
 * @param {number[]} nums
 * @return {number[]}
 */
// const findDisappearedNumbers = (nums) => {
//     const result = [], numsSet = new Set(nums);

//     for (let i = 1; i <= nums.length; i++) {
//         if (!numsSet.has(i)) result.push(i);
//     }

//     return result;
// };

const findDisappearedNumbers = (nums) => {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;
        if (nums[index] > 0) {
            nums[index] = -nums[index];
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }

    return result;
};


// console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
// console.log(findDisappearedNumbers([1, 1]));

export default findDisappearedNumbers;