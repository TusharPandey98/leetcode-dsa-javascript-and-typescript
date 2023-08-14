/**
 * @param {number []} nums
 * @param {boolean} 
 */

//using map 
// const containsDuplicate = (nums) => {
//     if (nums.length === 0) return false;
//     let countMap = {};
//     nums.forEach(num => {
//         if (!countMap[num]) {
//             countMap[num] = 1;
//         } else {
//             countMap[num] = countMap[num] + 1;
//         }
//     });

//     for (const key in countMap) {
//         if (countMap[key] >= 2) return true;
//     }
//     return false;
// }

//using sort then count the adjecent elements

// const containsDuplicate = (nums) => {
//     const sortedArr = nums.sort((a, b) => a - b);
//     let count = 0, candidate = 0;
//     for (let i = 0; i < sortedArr.length; i++) {
//         if(count==0){
//             candidate = sortedArr[i];
//             count++;
//         }else if(candidate == sortedArr[i]){
//             count++;
//         }else if(candidate !== sortedArr[i]){
//             count = 1
//             candidate = sortedArr[i];
//         } 

//         if (count >= 2) return true;
//     }
//     return false;
// }

//using set data structure
const containsDuplicate = (nums) => {
    const numsSet = new Set();
    for (const num of nums) {
        if (numsSet.has(num)) {
            return true;
        }
        numsSet.add(num)
    }
    return false;
}
// console.log(containsDuplicate([1, 2,3]));
// console.log(containsDuplicate([1,2,3,1]));
// console.log(containsDuplicate([2,14,18,22,22]));

export default containsDuplicate;