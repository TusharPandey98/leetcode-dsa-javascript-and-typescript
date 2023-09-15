/**
 * @param {string} word
 * @return {boolean}
 */
// const detectCapitalUse = (word) => {
//     const wordLength = word.length;
//     if(wordLength == 1) return true;
//     const firstChar = word[0];
//     const resetOfWord = word.substring(1);

//     const allLowerCase = resetOfWord.toLowerCase() == resetOfWord;
//     const allUpperCase = resetOfWord.toUpperCase() == resetOfWord;

//     if(firstChar == firstChar.toUpperCase()){
//         return allLowerCase || allUpperCase;
//     }
//     return allLowerCase;
// };

// const detectCapitalUse = (word) => {
//     const upperCount = (word.match(/[A-Z]/g) || []).length;
//     const lowerCount = (word.match(/[a-z]/g) || []).length;

//     return (
//         (upperCount === 0 && lowerCount === word.length) || // All lowercase
//         (upperCount === word.length) ||                    // All uppercase
//         (upperCount === 1 && word[0] === word[0].toUpperCase()) // Title case
//     );
// };


const detectCapitalUse = (word) => {
    if (word.toUpperCase() == word) return true;
    if (word.toLowerCase() == word) return true;
    let capitalNb = 0;
    for (let i = 0; i < word.length; i++) {
        if (word.charAt(i) == word.charAt(i).toUpperCase()) {
            capitalNb++;
        }
    }
    return capitalNb == 1 && word.charAt(0) == word.charAt(0).toUpperCase()
};


// console.log(detectCapitalUse('leetcode'));//true
// console.log(detectCapitalUse('USA'));
// console.log(detectCapitalUse('FlaG'));
// console.log(detectCapitalUse('FGlG'));
// console.log(detectCapitalUse('FLAG'));
// console.log(detectCapitalUse('FL'));
// console.log(detectCapitalUse('a'));//true
// console.log(detectCapitalUse('A'));
// console.log(detectCapitalUse('aA'));
// console.log(detectCapitalUse('aF'));
// console.log(detectCapitalUse('Fa'));//true

export default detectCapitalUse;