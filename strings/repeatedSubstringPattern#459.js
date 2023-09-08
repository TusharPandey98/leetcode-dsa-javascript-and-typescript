/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = (s) => {
    if (!s) return false;

    const ss = (s + s).slice(1, -1);

    return ss.indexOf(s) !== -1;
};


//using loop
// const repeatedSubstringPattern = (s) => {
//     if (!s) {
//         return false; // Return false for empty string
//     }

//     const len = s.length;

//     // Check for substrings of various lengths
//     for (let i = 1; i <= len / 2; i++) {
//         if (len % i === 0) {
//             const subStr = s.slice(0, i);
//             const numRepeats = len / i;
//             const constructedStr = subStr.repeat(numRepeats);

//             if (constructedStr === s) {
//                 return true; // Found a repeating substring that constructs s
//             }
//         }
//     }

//     return false; // No repeating substring found
// }
// console.log(repeatedSubstringPattern('aaaaaa'));
// console.log(repeatedSubstringPattern('a'));
// console.log(repeatedSubstringPattern('ab'));
// console.log(repeatedSubstringPattern('abab'));
// console.log(repeatedSubstringPattern('aaabaaab'));

export default repeatedSubstringPattern;