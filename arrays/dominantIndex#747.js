/**
 * @param {number[]} nums
 * @return {number}
 */
// const dominantIndex = (nums) => {
//     let max = 0, domIndex = -1;
//     for (let j = 0; j < nums.length; j++) {
//         if (nums[j] >= max) {
//             max = nums[j];
//             domIndex = j;
//         }
//     }

//     for (let j = 0; j < nums.length; j++) {
//         const num = nums[j];
//         if (num === max) continue;
//         else if (num * 2 > max) {
//             domIndex = -1;
//             break;
//         }
//     }

//     return domIndex;
// };

// more optimized and concise

const dominantIndex = (nums) => {
    let max = 0, secondMax = 0, domIndex = -1;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (num > max) {
            secondMax = max;
            max = num;
            domIndex = i;
        } else if (num > secondMax) {
            secondMax = num;
        }
    }

    return max >= 2 * secondMax ? domIndex : -1;
};


// console.log(dominantIndex([3, 6, 1, 0]));
// console.log(dominantIndex([1, 2, 3, 4]));
// console.log(dominantIndex([0, 0, 3, 2]));

export default dominantIndex;