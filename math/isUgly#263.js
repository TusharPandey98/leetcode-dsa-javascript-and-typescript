/**
 * @param {number} n
 * @return {boolean}
 */
//using recurrsion
// const isUgly = (n) => {
//     if (n <= 0) return false;
//     if (n == 1) return true;

//     if (n % 2 == 0) {
//         n = n / 2;
//     } else if (n % 3 == 0) {
//         n = n / 3;
//     } else if (n % 5 == 0) {
//         n = n / 5;
//     } else {
//         if (n == 0) return false
//         return false;
//     }
//     return isUgly(n);
// };

//using iterative method

const isUgly = (n) => {
    if (n <= 0) return false;

    while (n > 1) {
        if (n % 2 == 0) n /= 2;
        else if (n % 3 == 0) n /= 3;
        else if (n % 5 == 0) n /= 5;
        else return false;
    }
    return n > 0;
}

// console.log(isUgly(6));
// console.log(isUgly(1));
// console.log(isUgly(14));
// console.log(isUgly(25));
// console.log(isUgly(0));

export default isUgly;