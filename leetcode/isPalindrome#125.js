/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
    let modifiedString = s.replaceAll(/[\W_]/g, '').toLowerCase();
    console.log(modifiedString);
    if (modifiedString.length === 0) return true;
    let left = 0, right = modifiedString.length - 1;
    while (left < right) {
        if (modifiedString[left] === modifiedString[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
};
// console.log(isPalindrome("A man, a plan, a canal: Panama"));
export default isPalindrome;