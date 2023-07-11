/**
 * @param {number[]} digits
 * @return {number[]}
 */
// const plusOne = (digits) => {
//     if(digits.length === 0) return [];
//     for(let i = digits.length - 1; i>=0; i--){
//         if(digits[i] < 9){
//             digits[i]++;
//             return digits;
//         }
//         digits[i] = 0;
//     }
//     digits = new Array(digits.length + 1);
//     digits.fill(0);
//     digits[0] = 1;
//     return digits;
// };
const plusOne = (digits) => {
    if(digits.length === 0) return [];
    for(let i = digits.length - 1; i>=0; i--){
        if(digits[i] < 9){
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
};

// var plusOne = function(digits) {
//     const fromArray = digits.join(''); // get Digits out of Array
//     const toInt = BigInt(fromArray) ; //Dont use parseInt, use BigInt instead :) 
//     const addOne = toInt + 1n; // add one! 
//     const result =  Array.from(String(addOne), Number); // return digits to array
//     return result
    
// };

console.log(plusOne([9]));
