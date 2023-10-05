/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = (left, right) => {
    const result = [];
    while (left <= right) {
        if (left % 10 === 0) {
            left++;
            continue;
        }
        else if (isSelfDivide(left)) {
            result.push(left);
        }
        left++;
    }
    return result;
};

const isSelfDivide = (n) => {
    const number = n;
    while (n > 0) {
        let digit = n % 10;
        if (number % digit !== 0) return false;
        n = Math.floor(n / 10)
    }
    return true;
}

// console.log(selfDividingNumbers(1, 22));
// console.log(selfDividingNumbers(47, 85));
// console.log(selfDividingNumbers(28, 210));

export default selfDividingNumbers;
