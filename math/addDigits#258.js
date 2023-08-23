/**
 * @param {number} n
 * @return {number}
 */
//using recusion 
// const addDigits = (n) => {
//     if (n < 10) return n;

//     let digit = 0, sum = 0;
//     while (n > 0) {
//         digit = n % 10;
//         sum = sum + digit;
//         n = Math.floor(n/10);
//     }
//     n = sum;
//     return addDigits(n);
// }

const addDigits = (n) => {
    if (n == 0) return 0;
    if (n % 9 == 0) return 9;
    return n % 9;
}

// console.log(addDigits(38));
// console.log(addDigits(0));
// console.log(addDigits(57));//3
// console.log(addDigits(99));//9

export default addDigits;