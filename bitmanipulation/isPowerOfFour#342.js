/**
 * @param {number} n
 * @return {boolean}
 */
//using iteraitve method
// const isPowerOfFour = (n) => {
//     if(n <= 0) return false;
//     while (n % 4 == 0) {
//         n = n / 4;
//     }
//     return n === 1;
// };

//recursive appraoch
// const isPowerOfFour = (n) => {
//     if (n === 1) return true;
//     if (n <= 0 || n % 4 !== 0) return false;    
//     return isPowerOfFour(n / 4);
// };

//using bit manipulation
const isPowerOfFour = (n) => {
    return (n > 0) && ((n & (n - 1)) == 0) && ((n & 0x55555555) == n)
}

// Test cases
// console.log(isPowerOfFour(-1));  // true
// console.log(isPowerOfFour(4));  // true
// console.log(isPowerOfFour(16)); // true
// console.log(isPowerOfFour(5));  // false
// console.log(isPowerOfFour(8));  // false

// console.log(isPowerOfFour(4));
// console.log(isPowerOfFour(3));
// console.log(isPowerOfFour(8));

export default isPowerOfFour;