/**
 * @param {number[]} nums
 * @return {number[]}
 */
// const majorityElement = (nums) => {
//     const countMap = new Map();
//     const frequency = nums.length / 3;
//     const result = [];

//     for (const num of nums) {
//         countMap.set(num, (countMap.get(num) || 0) + 1);
//     }

//     for (const [key, value] of countMap) {
//         if (value > frequency) result.push(key);
//     }

//     return result;
// };

//follow up:- Could you solve the problem in linear time and in O(1) space?
const majorityElement = (nums) => {
    let candidate1 = null, candidate2 = null;
    let count1 = 0, count2 = 0;

    // Step 1: Find two potential candidates
    for (const num of nums) {
        if (num === candidate1) {
            count1++;
        } else if (num === candidate2) {
            count2++;
        } else if (count1 === 0) {
            candidate1 = num;
            count1 = 1;
        } else if (count2 === 0) {
            candidate2 = num;
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }

    // Step 2: Count occurrences of the potential candidates
    count1 = 0;
    count2 = 0;
    for (const num of nums) {
        if (num === candidate1) {
            count1++;
        } else if (num === candidate2) {
            count2++;
        }
    }

    // Step 3: Check if candidates meet the requirement
    const result = [];
    if (count1 > nums.length / 3) {
        result.push(candidate1);
    }
    if (count2 > nums.length / 3) {
        result.push(candidate2);
    }

    return result;
};


// console.log(majorityElement([3,2,3]));
// console.log(majorityElement([1,2]));
// console.log(majorityElement([1]));

export default majorityElement;