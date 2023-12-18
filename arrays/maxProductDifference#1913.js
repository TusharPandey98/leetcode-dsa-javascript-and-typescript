/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProductDifference = (nums) => {
    let firstMax = 0, secondMax = 0, firstMin = Infinity, secondMin = Infinity;
    for (const num of nums) {
        if (num > firstMax) {
            secondMax = firstMax;
            firstMax = num;
        }
        else if (num > secondMax) {
            secondMax = num;
        }


        if (num < firstMin) {
            secondMin = firstMin;
            firstMin = num;
        }
        else if (num < secondMin) {
            secondMin = num;
        }
    }

    return (firstMax * secondMax) - (firstMin * secondMin);
};

export default maxProductDifference;

console.log(maxProductDifference([5, 6, 2, 7, 4]));
console.log(maxProductDifference([4, 2, 5, 9, 7, 4, 8]));