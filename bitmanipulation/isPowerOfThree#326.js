/**
 * @param {number} n
 * @return {boolean}
 */
// const isPowerOfThree = (n) => {
//     return n > 0 && 1162261467 % n == 0;
// };

//using loop Iteration 
const isPowerOfThree = (n) => {
    if (n < 1) return false;
    while (n % 3 == 0) {
        n = Math.floor(n / 3);
    }
    return n === 1;
}

// console.log(isPowerOfThree(-5));
// console.log(isPowerOfThree(4));
// console.log(isPowerOfThree(27));

export default isPowerOfThree;

