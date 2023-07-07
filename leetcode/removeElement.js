/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
export default removeElement = function (nums, val) {
    const removedArr = [];
    nums.forEach(num =>{
        if(num !== val){
            removedArr.push(num)
        }
    })
    nums.length = 0;
    nums.push(...removedArr);
    return removedArr.length;
};

// const removeElement = function (nums, val) {
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i]  === val){
//             nums.splice(i,1);
//             i--;
//         }
//     }
//     return nums.length;
// };

// const removeElement = function (nums, val) {
//     let startIndex = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i]  !== val){
//             nums[startIndex] = nums[i];
//             startIndex++;
//         }
//     }
//     return startIndex;
// };


// console.log(removeElement([0,1,2,2,3,0,4,2],2));