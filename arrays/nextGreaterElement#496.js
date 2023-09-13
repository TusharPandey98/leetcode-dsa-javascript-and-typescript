/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = (nums1, nums2) => {
    const nextGreater = new Map();
    const nums1Length = nums1.length, nums2Length = nums2.length;
    if ((nums1Length || nums2Length) == 0) return [];
    const stack = [];
    for (const num of nums2) {
        while (stack.length > 0 && num > stack[stack.length - 1]) {
            nextGreater.set(stack.pop(), num)
        }
        stack.push(num)
    }

    const result = new Array(nums1Length).fill(-1);

    for (let i = 0; i < nums1Length; i++) {
        const num = nums1[i];
        if (nextGreater.has(num)) result[i] = (nextGreater.get(num))
    }
    return result;
};

// console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
// console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
// console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]));
// console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1]));

export default nextGreaterElement;