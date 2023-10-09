/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
    let left = 0, right = nums.length - 1;
    const result = [-1, -1];

    // Search for the left bound
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] >= target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    // If the target is not found, return [-1, -1]
    if (left >= nums.length || nums[left] !== target) {
        return result;
    }

    result[0] = left;

    // Search for the right bound
    right = nums.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    result[1] = right;

    return result;
};

// console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // Output: [3, 4]
// console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // Output: [-1, -1]
// console.log(searchRange([], 0)); // Output: [-1, -1]


export default searchRange;