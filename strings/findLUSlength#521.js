/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
const findLUSlength = (a, b) => {
    if (a == b) return -1;
    return Math.max(a.length, b.length);
};


// console.log(findLUSlength('cdc','aba'));
// console.log(findLUSlength('aaa','bbb'));
// console.log(findLUSlength('aaa','aaa'));

export default findLUSlength;