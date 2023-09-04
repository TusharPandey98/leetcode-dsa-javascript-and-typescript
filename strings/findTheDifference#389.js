/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
// const findTheDifference = (s, t) => {
//     const countArr = new Array(26).fill(0);
//     //count character

//     for (let i = 0; i < s.length; i++) {
//         const index = s.charCodeAt(i) - 97;
//         countArr[index]++;
//     }

//     //checking in second string is char is already present
//     for (let i = 0; i < t.length; i++) {
//         const index = t.charCodeAt(i) - 97;
//         if (countArr[index]) countArr[index]--;
//         else countArr[index]++;
//     }

//     for (let i = 0; i < countArr.length; i++) {
//         if (countArr[i] == 1) return String.fromCharCode(i + 97);
//     }
// };

//using bit manipulation
const findTheDifference = (s, t) => {
    let result = 0;

    // XOR all the character codes in both strings
    for (let i = 0; i < s.length; i++) {
        result ^= s.charCodeAt(i);
        result ^= t.charCodeAt(i);
    }

    // XOR the remaining character code in the longer string
    result ^= t.charCodeAt(t.length - 1);

    // Convert the result back to a character
    return String.fromCharCode(result);
};

// console.log(findTheDifference("abcd", "abcde"));
// console.log(findTheDifference("", "y"));
// console.log(findTheDifference("a", "aa"));
// console.log(findTheDifference("aabb", "aabbc"));
export default findTheDifference;
