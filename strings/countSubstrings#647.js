/**
 * @param {string} s
 * @return {number}
 */

//brute force
// const countSubstrings = (s) => {
//     if (s.length === 0) return 0;
//     let count = 0;
//     for (let i = 0; i < s.length; i++) {
//         for (let j = i; j < s.length; j++) {
//             console.log(s.substring(i,j));
//             if (isPalindrome(s, i, j)) count++;
//         }
//     }
//     return count;
// };

// const isPalindrome = (s, left, right) => {
//     while (left < right) {
//         if (s[left] !== s[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// }

// expanded middle
const countSubstrings = (s) => {
    let sLength = s.length;
    let ans = 0;

    for (let i = 0; i < sLength; i++) {
        let even = palindromeCount(s, i, i + 1);
        let odd = palindromeCount(s, i - 1, i + 1);
        ans += odd + even + 1;
    }

    return ans;
}

const palindromeCount = (s, left, right) => {
    let count = 0;
    while (left >= 0 && right < s.length && s.charAt(left--) === s.charAt(right++)) {
        count++;
    }
    return count;
}
// console.log(countSubstrings('abc'));
// console.log(countSubstrings('aaa'));

export default countSubstrings;