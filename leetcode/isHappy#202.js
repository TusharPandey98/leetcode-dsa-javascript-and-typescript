/**
 * @param {number} n
 * @return {boolean}
 */
//using recurssion call
// const isHappy = (n) => {
//     if (n === 1 || n === 7) return true
//     if (n < 10) return false

//     let sum = 0, digit = 0;
//     while (n > 0) {
//         digit = n % 10;
//         n = Math.floor(n / 10);
//         sum = sum + digit * digit;
//     }
//     return isHappy(sum);
// }

//iterative way
// const isHappy = (n) => {
//     while (n !== 1 && n !== 4) {
//         let sum = 0;
//         while (n > 0) {
//             const digit = n % 10;
//             sum += digit * digit;
//             n = Math.floor(n / 10);
//         }
//         n = sum;
//     }
//     return n === 1;
// };

//using set to neglect the repeative call
const isHappy = (n) => {
    const seen = new Set();

    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        let sum = 0;
        while (n > 0) {
            const digit = n % 10;
            sum += digit * digit;
            n = Math.floor(n / 10);
        }
        n = sum;
    }

    return n === 1;
};

// console.log(isHappy(19));
// console.log(isHappy(1));
// console.log(isHappy(7));
// console.log(isHappy(10));

// console.log(isHappy(23));
// console.log(isHappy(28));
// console.log(isHappy(100));

export default isHappy;