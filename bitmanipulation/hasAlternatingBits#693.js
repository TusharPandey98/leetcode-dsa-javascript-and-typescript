/**
 * @param {number} n
 * @return {boolean}
 */
// const hasAlternatingBits = (n) => {
//     let prev = '', next = '';
//     do {
//         let digit = n % 2;
//         prev = digit;
//         if (prev === next) return false;
//         n = Math.floor(n / 2);
//         next = prev;
//     }
//     while (n > 0)
//     return true;
// };


// const hasAlternatingBits = (n) => {
//     let prevBit = n % 2;
//     n >>= 1; // Right shift to remove the last bit

//     while (n > 0) {
//         const currentBit = n % 2;
//         if (prevBit === currentBit) {
//             return false;
//         }
//         prevBit = currentBit;
//         n >>= 1;
//     }

//     return true;
// };

const hasAlternatingBits = (n) => {
    if(n < 0) return false;
    let val = n & 1
    n = n >> 1

    while (n > 0) {
        if ((n & 1) == val) return false
        val = n & 1
        n = n >> 1
    }
    return true

};

// const hasAlternatingBits = (n) => {
//     let str = n.toString(2)
//     let flag = ''
//     let bool = true
//     for (let i = 0; i < str.length; i++) {
//         if (str.charAt(i) == flag) bool = false
//         flag = str.charAt(i)
//     }
//     return bool

// };

// console.log(hasAlternatingBits(5));
// console.log(hasAlternatingBits(4));
// console.log(hasAlternatingBits(7));
// console.log(hasAlternatingBits(11));
// console.log(hasAlternatingBits(10));

export default hasAlternatingBits;