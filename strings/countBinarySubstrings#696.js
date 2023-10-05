/**
 * @param {string} s
 * @return {number}
 */
const countBinarySubstrings = (s) => {
    let ans = 0, prev = 0, cur = 1

    for (let j = 1; j < s.length; j++) {
        if (s.charAt(j - 1) != s.charAt(j)) {
            ans += Math.min(prev, cur);
            prev = cur;
            cur = 1;
        } else cur++;
    }

    return ans + Math.min(prev, cur);
};

// console.log(countBinarySubstrings("00110011"));
// console.log(countBinarySubstrings("10101"));

export default countBinarySubstrings;