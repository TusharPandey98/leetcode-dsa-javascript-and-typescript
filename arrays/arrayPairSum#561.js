/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = (nums) => {
    const numsLength = nums.length;
    let maximumSum = 0;
    if (numsLength == 0) return 0;

    nums.sort((a, b) => a - b);

    for (let j = 0; j < numsLength; j += 2) {
        maximumSum += nums[j];
    }
    return maximumSum;
};

// console.log(arrayPairSum([1,3,4,2]));
// console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));

export default arrayPairSum;