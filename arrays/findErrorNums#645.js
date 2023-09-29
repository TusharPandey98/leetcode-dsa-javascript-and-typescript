/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = (nums) => {
    const numberMap = new Map();
    const numsLength = nums.length;
    let missing = -1, duplicate = -1;

    for (let j = 0; j < numsLength; j++) {
        const num = nums[j];
        numberMap.set(num, (numberMap.get(num) || 0) + 1)
    }

    for (let j = 1; j <= numsLength; j++) {
        if (numberMap.has(j)) {
            if (numberMap.get(j) == 2) duplicate = j;
        } else missing = j;
    }
    return [duplicate, missing];
};


// console.log(findErrorNums([1, 2, 2, 4]));//[2,3]
// console.log(findErrorNums([1, 1]));//[1,2]
// console.log(findErrorNums([3, 2, 2]));//[2,1]

export default findErrorNums;