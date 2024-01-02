/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const findMatrix = (nums) => {
    let freq = new Array(nums.length + 1).fill(0);
    let ans = [];

    nums.forEach(c => {
        if (freq[c] >= ans.length) {
            ans.push([]);
        }

        ans[freq[c]].push(c);
        freq[c]++;
    });

    return ans;
};

export default findMatrix;