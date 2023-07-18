/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// const merge = (nums1, m, nums2, n) => {
//     const mergedArr = [];
//     let i = 0, j = 0;
//     while (i < m && j < n) {
//         if (nums1[i] === 0 && nums2[j] != 0) {
//             mergedArr.push(nums2[j])
//             j++
//         } else if (nums1[i] !== 0 && nums2[j] == 0) {
//             mergedArr.push(nums1[i])
//             i++
//         } else if (nums1[i] <= nums2[j]) {
//             mergedArr.push(nums1[i]);
//             i++
//         } else if (nums1[i] >= nums2[j]) {
//             mergedArr.push(nums2[j]);
//             j++
//         }
//         // j++;
//         // i++;

//     }
//     while (i < m) {
//         if (nums1[i] != 0) {
//             mergedArr.push(nums1[i]);
//         }
//         i++;
//     }
//     while (j < n) {
//         if (nums2[j] != 0) {
//             mergedArr.push(nums2[j]);

//         }
//         j++;
//     }
//     nums1.length = 0;
//     nums1.push(...mergedArr)
//     return nums1;
// };

const merge = (nums1, m, nums2, n) => {
    let ptr1 = m - 1, ptr2 = n - 1, mergedPtr = m + n - 1;

    while (ptr1 >= 0 && ptr2 >= 0) {
        if (nums1[ptr1] >= nums2[ptr2]) {
            nums1[mergedPtr] = nums1[ptr1];
            ptr1--;
        } else {
            nums1[mergedPtr] = nums2[ptr2];
            ptr2--;
        }
        mergedPtr--;
    }
    while (ptr2 >= 0) {
        nums1[mergedPtr] = nums2[ptr2];
        ptr2--;
        mergedPtr--;
    }
}

// console.log(merge([1, 2, 3], 3, [2, 5, 6], 3));
// console.log(merge([1], 1, [], 0));
// console.log(merge([], 0, [1], 1));
console.log(merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3));