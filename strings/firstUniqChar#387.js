/**
 * @param {string} s
 * @return {number}
 */
//using hashmap
// const firstUniqChar = (s) => {
//     const charCount = new Map();

//     // Count characters
//     for (const char of s) {
//         charCount.set(char, (charCount.get(char) || 0) + 1);
//     }

//     // Find the first unique character
//     for (let i = 0; i < s.length; i++) {
//         if (charCount.get(s[i]) === 1) {
//             return i;
//         }
//     }

//     return -1;
// };

//using array
const firstUniqChar = (s) => {
    const countArr = new Array(26).fill(0);
    const strLength = s.length;
    //count character
    for (let i = 0; i < strLength; i++) {
        const index = s.charCodeAt(i) - 97;
        countArr[index]++;
    }
    // Find the first unique character
    for (let i = 0; i < strLength; i++) {
        const index = s.charCodeAt(i) - 97;
        if (countArr[index] === 1) return i;
    }

    return -1;

}
// console.log(firstUniqChar('leetcode'));
// console.log(firstUniqChar("loveleetcode"));
// console.log(firstUniqChar("aabb"));
// console.log(firstUniqChar("aadadaad"));

export default firstUniqChar;
