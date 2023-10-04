/**
 * @param {number[]} nums
 * @return {number}
 */
// const findShortestSubArray = (nums) => {
//     const left = new Map(), right = new Map(), countMap = new Map();

//     for (let j = 0; j < nums.length; j++) {
//         const num = nums[j];
//         if (!left.has(num)) left.set(num, j);
//         right.set(num, j);
//         countMap.set(num, (countMap.get(num) || 0) + 1);
//     }

//     let degree = -Infinity;
//     let ans = nums.length;

//     for (const [_, value] of countMap) {
//         degree = Math.max(value, degree);
//     }

//     for (const [key, value] of countMap) {
//         if(countMap.get(key) === degree) ans = Math.min(ans , right.get(key) - left.get(key) + 1)
//     }
    
//     return ans;
// };

// more optimized and concise
const findShortestSubArray = (nums) => {
    const left = new Map();
    const countMap = new Map();
    let degree = 0;
    let minLength = nums.length;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        left.set(num, left.has(num) ? left.get(num) : i);
        countMap.set(num, (countMap.get(num) || 0) + 1);

        if (countMap.get(num) > degree) {
            degree = countMap.get(num);
            minLength = i - left.get(num) + 1;
        } else if (countMap.get(num) === degree) {
            minLength = Math.min(minLength, i - left.get(num) + 1);
        }
    }

    return minLength;
};

// console.log(findShortestSubArray([1, 2, 2, 3, 1]));
// console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2]));
// console.log(findShortestSubArray([1, 5, 2, 3, 5, 4, 5, 6]));

export default findShortestSubArray;