/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// const hammingDistance = (x, y) => {
//     let distance = 0;

//     for (let val = x ^ y; val > 0; ++distance) {
//         val = val & (val - 1);
//     }

//     return distance;
// };

//
// const hammingDistance = (x, y) => {
//     // Calculate the XOR of x and y
//     let xorResult = x ^ y;

//     // Count the number of set bits (1s) in the XOR result
//     let distance = 0;
//     while (xorResult > 0) {
//         // Increment distance if the least significant bit is 1
//         if (xorResult & 1) {
//             distance++;
//         }
//         // Right-shift the XOR result to check the next bit
//         xorResult >>= 1;
//     }

//     return distance;
// }

//using inbuilt function 
const hammingDistance = (x, y) => {
    let firstValue = x.toString(2);
    let secondValue = y.toString(2);
    let result = 0;

    if (firstValue.length < secondValue.length) {
        firstValue = firstValue.padStart(secondValue.length, "0");
    }

    if (firstValue.length > secondValue.length) {
        secondValue = secondValue.padStart(firstValue.length, "0");
    }

    for (let i = 0; i < firstValue.length; i++) {
        if (firstValue[i] !== secondValue[i]) {
            result++;
        }
    }

    return result;
};



// console.log(hammingDistance(1, 4));
export default hammingDistance;