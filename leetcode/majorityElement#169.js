/**
 * @param {number[]} nums
 * @return {number} 
 */
//Using map
// const majorityElement = (nums) => {
//     if (nums.length === 0) return null;
//     let countMap = {};
//     nums.forEach(num => {
//         if (!countMap[num]) {
//             countMap[num] = 1;
//         } else {
//             countMap[num] = countMap[num] + 1;
//         }
//     })

//     for (const count in countMap) {
//         if (countMap[count] >= nums.length / 2) return count;
//     }
// }

//

const majorityElement = (nums) => {
    let candidate = 0, count = 0;
    nums.forEach(num => {
        if (count == 0) {
            candidate = num
            count = 1;
        } else if (num === candidate) {
            count++;
        } else {
            count--;
        }
    });

    count = 0;
    nums.forEach(num => {
        if (num === candidate) {
            count++;
        }
    })

    if (count > nums.length / 2) return candidate;
    return null;
}


// const majorityElement = (nums) => {
//     let candidate = 0, count = 0;
//     nums.forEach(num => {
//         if (count == 0) {
//             candidate = num
//             count = 1;
//         } else if (num === candidate) {
//             count++;
//         } else {
//             count--;
//         }
//     });

//     return candidate;
// }

// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
// console.log(majorityElement([3, 1, 3]));
// console.log(majorityElement([1,3,4]));

export default majorityElement;