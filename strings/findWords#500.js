/**
 * @param {string[]} words
 * @return {string[]}
 */
// const findWords = (words) => {
//     const rowsMap = {
//         1: /^[qwertyuiop]*$/i,
//         2: /^[asdfghjkl]*$/i,
//         3: /^[zxcvbnm]*$/i
//     };
//     const result = [];

//     for (let i = 0; i < words.length; i++) {
//         const word = words[i];
//         for (const regex of Object.values(rowsMap)) {
//             if (regex.test(word)) {
//                 result.push(word);
//                 break;
//             }
//         }
//     }
//     return result;
// };

//more optimized
const findWords = (words) => {
    const rowsPattern = /^[qwertyuiop]*$|^[asdfghjkl]*$|^[zxcvbnm]*$/i;
    return words.filter(word => rowsPattern.test(word));
};

// console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
// console.log(findWords(["omk"]));
// console.log(findWords(["adsdf", "sfd"]));

export default findWords