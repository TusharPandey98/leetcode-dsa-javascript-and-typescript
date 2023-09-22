/**
 * @param {string} s
 * @return {string}
 */
// const reverseWords = (s) => {
//     let wordArr = s.split(' ');
//     return wordArr.map(word => reverse(word)).join(' ');
// };

// const reverse = (word) => {
//     let reverseWord = '';
//     for (let j = word.length -1 ; j >= 0; j--) {        
//         reverseWord += word[j]; 
//     }
//     return reverseWord;
// }

//second approach

const reverseWords = (s) => {
    s = reverse(s);
    return s.split(' ').reverse().join(' ');
};

const reverse = (word) => {
    let reverseWord = '';
    for (let j = word.length -1 ; j >= 0; j--) {        
        reverseWord += word[j]; 
    }
    return reverseWord;
}
// console.log(reverseWords("Let's take LeetCode contest"));

export default reverseWords;