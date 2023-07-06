// const removeDuplicates = (nums) => {
//     const uniqueArr = Array.from(new Set(nums));
//     for (let i = 0; i < nums.length; i++) {
//         uniqueArr.add(nums[i]);
//     }
//     nums.length = 0;
//     nums.push(...uniqueArr);
//     return uniqueArr.size;
// }

export default removeDuplicates = (nums) => {
    const uniqueArr = Array.from(new Set(nums));
    nums.length = 0;
    nums.push(...uniqueArr);
    return uniqueArr.length;
}

// const removeDuplicates = (nums) => {
//     if (nums.length === 0) return 0;

//     let index = 1;
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] !== nums[i - 1]) {
//             nums[index] = nums[i];
//             index++;
//         }

//     }
//     return index;
// }
// const removeDuplicates = (nums) => {
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i] == nums[i+1]) count++;
//         else nums[i - count] = nums[i];
//     }
//     return nums.length - count;
// }

// console.log(removeDuplicates([1, 1, 2]));