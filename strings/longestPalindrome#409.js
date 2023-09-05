/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = (s) => {
    const charMap = new Map();
    let ans = 0;

    for (const char of s) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
        if (charMap.get(char) % 2 === 0) ans += 2;
    }

    return s.length > ans ? ans + 1 : ans;
};


// console.log(longestPalindrome("abccccdd"));
// console.log(longestPalindrome("aaaaab"));

export default longestPalindrome;