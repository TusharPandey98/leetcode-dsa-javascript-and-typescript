/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//using two pointer method;
// const moveZeroes = (nums) => {
//     let left = 0, right = 1,arrLength = nums.length;
//     if (arrLength > 1) {
//         while (right <= arrLength - 1) {
//             if (nums[left] == 0 && nums[right] == 0) right++;
//             else if (nums[left] == 0 && nums[right] != 0) {
//                 const temp = nums[left];
//                 nums[left] = nums[right];
//                 nums[right] = temp;
//                 left++;
//             }else{
//                 left++;
//                 right++;
//             }
//         }
//     }
// };


//using for loop
// const moveZeroes = (nums) => {
//     let nonZeroIndex = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== 0) {
//             if (i !== nonZeroIndex) {
//                 [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];
//             }
//             nonZeroIndex++;
//         }
//     }
// };

//using snowball approach

const moveZeroes = (nums) =>{
    let snowBallSize = 0;
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if(element === 0){
            snowBallSize++
        }else if(snowBallSize > 0){
            [nums[i],nums[i-snowBallSize]] = [0,element]
        } 
    }
}

// console.log(moveZeroes([0,1,0,3,12]));
// console.log(moveZeroes([1,0,0,12]));
// console.log(moveZeroes([1,2,0,0,12,0]));
// console.log(moveZeroes([0,0,0]));

export default moveZeroes;