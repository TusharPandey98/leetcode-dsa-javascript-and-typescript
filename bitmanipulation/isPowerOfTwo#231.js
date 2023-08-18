/**
 * @param {number} n
 * @return {boolean}
 */
//using bit manipulation
// const isPowerOfTwo = (n) => {
//     return (n > 0 && !(n & (n - 1)));
// }

const isPowerOfTwo = (n) => {
    if (n <= 0) return false;
    if (n <= 2) return true
    if (n % 2 === 0) return isPowerOfTwo(n / 2);
    return false;
}

// console.log(isPowerOfTwo(2));
// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(3));
// console.log(isPowerOfTwo(8));
// console.log(isPowerOfTwo(-2147483648));

export default isPowerOfTwo;