const intersect = (nums1, nums2) => {
    const numbersMap = new Map();
    const result = [];
    nums1.forEach(num => {
        if (!numbersMap.has(num)) numbersMap.set(num, 1);
        else numbersMap.set(num, numbersMap.get(num) + 1)
    })
    nums2.forEach(num => {
        if (numbersMap.has(num) && numbersMap.get(num) > 0) {
            numbersMap.set(num, numbersMap.get(num) - 1);
            result.push(num)
        }
    })
    return result;
};

//if both arrays are sorted
// const intersect = (nums1, nums2) => {
//     let pointerOne = 0, pointerTwo = 0;
//     const result = [];

//     while (pointerOne < nums1.length && pointerTwo < nums2.length) {
//         if (nums1[pointerOne] === nums2[pointerTwo]) {
//             result.push(nums1[pointerOne]);
//             pointerOne++;
//             pointerTwo++;
//         } else if (nums1[pointerOne] < nums2[pointerTwo]) {
//             pointerOne++;
//         } else {
//             pointerTwo++;
//         }
//     }
//     return result;
// }
// console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));

export default intersect;