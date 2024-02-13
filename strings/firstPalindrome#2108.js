/**
 * @param {string[]} words
 * @return {string}
 */
//brute force
/* const firstPalindrome = function (words) {
    for (const word of words) {
        if (isPalindrome(word)) return word;
    }
    return "";
}; */

//using es6 arrays find method
const firstPalindrome = (words) => words.find(isPalindrome) || "";


const isPalindrome = (s) => {
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}

export default firstPalindrome;