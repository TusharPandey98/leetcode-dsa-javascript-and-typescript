/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//using map 
// const intersection = (nums1, nums2) => {
//     const numbersMap = new Map();
//     const result = [];
//     nums1.forEach(num => {
//         if(!numbersMap.has(num)) numbersMap.set(num,1);
//     })
//     nums2.forEach(num =>{
//         if(numbersMap.has(num) && numbersMap.get(num) < 2){
//             numbersMap.set(num,2);
//         }
//     })
//     numbersMap.forEach((value,key) => {
//         if(value ==2) result.push(key);
//     })
//     return result;
// };

//using set
// const intersection = (nums1, nums2) => {
//     const set1 = new Set(nums1), set2 = new Set(nums2);
//     const result = [];

//     for (const item of set1) {
//         if (set2.has(item)) result.push(item)
//     }
//     return result;
// }

//using filter
const intersection = (nums1, nums2) => {
    const set1 = new Set(nums1);
    return [...new Set(nums2)].filter(item => set1.has(item));
};

// console.log(intersection([1, 2, 3, 1, 2], [2, 2, 2]));
// console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
// console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));

export default intersection;