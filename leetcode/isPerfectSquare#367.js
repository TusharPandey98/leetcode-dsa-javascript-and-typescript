/**
 * @param {number} num
 * @return {boolean}
 */
//recursive approach
// const isPerfectSquare = (num) => {
//     if (num === 1) return true; // Base case: 1 is a perfect square

//     const isSquareHelper = (n, target) => {
//         if (n * n === target) return true;
//         if (n * n > target) return false; // We've gone past the square root

//         return isSquareHelper(n + 1, target); // Recursively check the next number
//     };

//     return isSquareHelper(2, num); // Start with 2 since 1 is handled separately
// };



//iterative appraoch
// const isPerfectSquare = (num) => {
//     if (num === 1) return true;
//     let n = 2;
//     while (n * n <= num) {
//         if (n * n === num) {
//             return true
//         }
//         n++;
//     }
//     return false;
// }

//binary search approach
const isPerfectSquare = (num) => {
    if (num === 1) return true;
    let left = 2, right = Math.floor(num / 2);
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        const square = mid * mid;
        if (square === num) return true;
        else if (square < num) left = mid + 1;
        else right = mid - 1;
    }
    return false;
}
// console.log(isPerfectSquare(15));
console.log(isPerfectSquare(9));
console.log(isPerfectSquare(6));
console.log(isPerfectSquare(100));
console.log(isPerfectSquare(9));   // true
console.log(isPerfectSquare(6));   // false
console.log(isPerfectSquare(100)); // true

export default isPerfectSquare;
