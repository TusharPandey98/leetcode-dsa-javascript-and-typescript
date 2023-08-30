/**
 * @param {number} n
 * @return {number[]}
 */
// const countBits = (n) => {
//     let result = [0];
//     for (let i = 1; i <= n; i++) {
//         if (isPowerOfTwo(i)) {
//             result.push(1);
//         } else {
//             result.push(noOfOnes(i));
//         }
//     }
//     return result;
// };

// const isPowerOfTwo = (n) => {
//     return (n && !(n & (n - 1)))
// }

// const noOfOnes = (n) => {
//     let count = 0;
//     while (n) {
//         n = n & (n - 1);
//         count++
//     }
//     return count;
// }


const countBits = (n) => {
    let result = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        result[i] = result[i >> 1] + (i & 1);
    }
    return result;
}
// console.log(countBits(5));
// console.log(countBits(2));
// console.log(countBits(4));

export default countBits