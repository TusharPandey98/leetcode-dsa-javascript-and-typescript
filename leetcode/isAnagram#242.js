/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//using two maps 
// const isAnagram = (s, t) => {
//     if (s.length !== t.length) return false;
//     const sourceMap = {}, targetMap = {};
//     for (let i = 0; i < s.length; i++) {
//         const currentCharacter = s[i];
//         if (!sourceMap[currentCharacter]) {
//             sourceMap[currentCharacter] = 1;
//         } else {
//             sourceMap[currentCharacter] = sourceMap[currentCharacter] + 1;
//         }

//     }
//     for (let j = 0; j < t.length; j++) {
//         const currentCharacter = t[j];
//         if (!targetMap[currentCharacter]) {
//             targetMap[currentCharacter] = 1;
//         } else {
//             targetMap[currentCharacter] = targetMap[currentCharacter] + 1;
//         }
//     }

//     for (const key in sourceMap) {
//         if (sourceMap[key] !== targetMap[key]) return false;
//     }
//     return true;
// }

//using single map

// const isAnagram = (s, t) => {
//     if (s.length !== t.length) return false;

//     const charCount = {};

//     for (let i = 0; i < s.length; i++) {
//         charCount[s[i]] = (charCount[s[i]] || 0) + 1;
//         charCount[t[i]] = (charCount[t[i]] || 0) - 1;
//     }

//     for (const count of Object.values(charCount)) {
//         if (count !== 0) return false;
//     }
//     return true;
// }

const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;

    const charCount = {};

    for (let i = 0; i < s.length; i++) {
        charCount[s[i]] = (charCount[s[i]] || 0) + 1;
        charCount[t[i]] = (charCount[t[i]] || 0) - 1;
    }

    return Object.values(charCount).every(count => count === 0);
};


// console.log(isAnagram('anagram', 'raagnma'));
export default isAnagram;