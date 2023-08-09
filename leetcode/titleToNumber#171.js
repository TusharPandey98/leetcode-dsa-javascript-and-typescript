/**
 * @param {string} columnTitle
 * @return {number}
 */

// const titleToNumber = (columnTitle) => {
//     let numberTitle = 0, columnTitleLength = columnTitle.length;
//     for (let i = 0; i < columnTitleLength; i++) {
//         const currentChar = columnTitle[i];
//         numberTitle = numberTitle + (currentChar.charCodeAt() - 64) * Math.pow(26, columnTitleLength - 1 - i);
//     }
//     return numberTitle;
// }
// const charToValue = (char) => {
//     return char.charCodeAt() - 64;
// }
const titleToNumber = (columnTitle) => {
    let numberTitle = 0;
    const base = 'A'.charCodeAt(0) - 1;
    
    for (let i = 0; i < columnTitle.length; i++) {
        const charValue = columnTitle.charCodeAt(i) - base;
        numberTitle = numberTitle * 26 + charValue;
    }
    
    return numberTitle;
}
// console.log(titleToNumber('ZY'));
// console.log(titleToNumber('AB'));

export default titleToNumber;