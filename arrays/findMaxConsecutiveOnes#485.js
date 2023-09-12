/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = (nums) => {
    let count = 0;
    let max = 0;

    for (const num of nums) {
        if (num === 1) {
            count++;
            if (count > max) {
                max = count;
            }
        } else {
            count = 0;
        }
    }

    return max;
}

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));

export default findMaxConsecutiveOnes