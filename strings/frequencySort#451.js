/**
 * @param {string} s
 * @return {string}
 */

//using map
// const frequencySort = (s) => {
//     const charMap = new Map();
//     for (const char of s) {
//         charMap.set(char, (charMap.get(char) + 1) || 1)
//     }
//     const sorted = [...charMap].sort((a, b) => b[1] - a[1]);
//     const sortedMap = new Map(sorted);
//     let result = '';
//     for (const [key, value] of sortedMap) {
//         result += key.repeat(value);
//     }
//     return result;
// };

//using normal object
const frequencySort = (s) => {
    const charCount = {};
    
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    const sortedChars = Object.keys(charCount).sort((a, b) => charCount[b] - charCount[a]);
    
    let sortedString = '';
    for (let char of sortedChars) {
        sortedString += char.repeat(charCount[char]);
    }
    
    return sortedString;
};

// console.log(frequencySort('tree'));
// console.log(frequencySort('cccaaa'));
// console.log(frequencySort('Aabb'));

export default frequencySort