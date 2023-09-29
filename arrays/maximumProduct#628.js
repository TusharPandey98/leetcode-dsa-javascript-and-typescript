/**
 * @param {number[]} nums
 * @return {number}
 */
//using sort
// const maximumProduct = (nums) => {
//     nums = nums.sort((a, b) => (a-b));
//     return Math.max(nums[0] * nums[1] * nums[nums.length - 1], nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]);
// };

//single scan
const maximumProduct = (nums) => {
    if(nums.length < 3) return 0;
    
    let min1 = Infinity, min2 = Infinity;
    let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;

    for (let j = 0; j < nums.length; j++) {
        const n = nums[j];

        if (n <= min1) {
            min2 = min1;
            min1 = n;
        } else if (n <= min2) {
            min2 = n;
        }

        if (n >= max1) {
            max3 = max2;
            max2 = max1;
            max1 = n;
        } else if (n >= max2) {
            max3 = max2;
            max2 = n;
        } else if (n >= max3) {
            max3 = n;
        }

    }

    return Math.max(max1 * max2 * max3, min1 * min2 * max1);
};

// console.log(maximumProduct([1, 2, 3, 4]));
// console.log(maximumProduct([1, 2, 3]));
// console.log(maximumProduct([-1, -2, -3]));
// console.log(maximumProduct([-100, -98, -1, 2, 3, 4]));
// console.log(maximumProduct([-100, -2, -3, 1]));//300
// console.log(maximumProduct([-8, -7, -2, 10, 20]));//1120

export default maximumProduct;