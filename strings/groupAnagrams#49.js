/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// const groupAnagrams = (strs) => {

//     const anagramGroups = new Map();

//     for (const word of strs) {
//         // Count the occurrences of each character in the word
//         const charCount = Array(26).fill(0); // Assuming lowercase English letters

//         for (const char of word) {
//             const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
//             charCount[index]++;
//         }

//         // Convert the character count to a string for use as a key in the Map
//         const key = charCount.join(',');

//         if (!anagramGroups.has(key)) {
//             anagramGroups.set(key, [word]);
//         } else {
//             anagramGroups.get(key).push(word);
//         }
//     }

//     return Array.from(anagramGroups.values());
// }


const groupAnagrams = (strs) => {
    const map = new Map();

    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');

        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }

        map.get(sortedStr).push(str);
    }

    return Array.from(map.values());
};



// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));//[["bat"],["nat","tan"],["ate","eat","tea"]]

export default groupAnagrams;