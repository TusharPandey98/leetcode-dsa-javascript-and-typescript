/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = (s) => {

    const isPalindrome = (str, left, right) => {
        while (left < right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true;
    }
    let left = 0, right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
        }
        left++;
        right--;

    }
    return true;
};

// console.log(validPalindrome('aba'));
// console.log(validPalindrome('abc'));
// console.log(validPalindrome('aac'));
// console.log(validPalindrome('abca'));

export default validPalindrome;