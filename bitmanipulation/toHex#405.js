/**
 * @param {number} num
 * @return {string}
 */
const toHex = (num) => {
    if (num === 0) return "0";

    let hexString = '';
    const hexChars = '0123456789abcdef';

    while (num !== 0) {
        hexString = hexChars[num & 15] + hexString;
        num >>>= 4; // Bitwise shift right by 4 bits (equivalent to dividing by 16)
    }

    return hexString;
};

// console.log(toHex(26)); // Output: "1a"
// console.log(toHex(32)); // Output: "20"
// console.log(toHex(16)); // Output: "10"
// console.log(toHex(-1)); // Output: "ffffffff"

export default toHex;
