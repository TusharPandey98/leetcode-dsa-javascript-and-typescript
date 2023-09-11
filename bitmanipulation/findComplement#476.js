/**
 * @param {number} num
 * @return {number}
 */
// const findComplement = (num) => {
//     let binaryString = num.toString(2);
//     let complemtString = '';
//     for (let i = 0; i < binaryString.length; i++) {
//         const bit = binaryString[i];
//         if (bit == '1') complemtString += '0';
//         else complemtString += '1';
//     }
//     return parseInt(complemtString, 2);
// };

//using bit manupulation
// const findComplement = (num) => {
//     let mask = 1;
//     while (mask < num) mask = (mask << 1) | 1;
//     return num ^ mask;
// };
//using maths
const findComplement = (num) => {
    const bitsLength = Math.floor(Math.log2(num) + 1);
    return num ^ (Math.pow(2, bitsLength) - 1);
};

// console.log(findComplement(5));//010
// console.log(findComplement(1));//010

export default findComplement