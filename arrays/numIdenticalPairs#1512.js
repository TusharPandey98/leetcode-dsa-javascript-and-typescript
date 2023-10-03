/**
 * @param {number[]} nums
 * @return {number}
 */
// const numIdenticalPairs = (nums) => {
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i; j < nums.length; j++) {
//             if (i !== j && nums[i] === nums[j]) count++;
//         }
//     }
//     return count;
// };

// const numIdenticalPairs = (nums) => {
//     let count = 0;
//     const countMap = new Map();
//     for (let j = 0; j < nums.length; j++) {
//         countMap.set(nums[j], (countMap.get(nums[j]) || 0) + 1);
//     }

//     for (const [_,value] of countMap) {
//         if(value > 1) count += ((value)*(value - 1)) / 2
//     }

//     return count;
// };

const numIdenticalPairs = (nums) => {
    const countMap = new Map();
    let count = 0;
    for (const num of nums) {
        count += countMap.get(num) || 0;
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    return count;
};


// console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
// console.log(numIdenticalPairs([1, 1, 1, 1]));
// console.log(numIdenticalPairs([1, 2, 3]));

export default numIdenticalPairs;