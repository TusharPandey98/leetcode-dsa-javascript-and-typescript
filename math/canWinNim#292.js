/**
 * @param {number} n
 * @return {boolean}
 */
const canWinNim = (n) => {
    return n % 4 !== 0;
};

// console.log(canWinNim(4));
// console.log(canWinNim(1));
// console.log(canWinNim(3));
// console.log(canWinNim(5));
// console.log(canWinNim(10));
export default canWinNim;