/**
 * @param {string} num
 * @return {string}
 */
const largestOddNumber = (num) => {
    for (let i = num.length - 1; i >= 0; i--) {
        if (isOdd(num[i])) {
            return num.substring(0, i + 1);
        }
    }

    return "";
}

const isOdd = (number) => {
    return (parseInt(number) & 1) === 1;
}

// console.log(largestOddNumber("52"));
// console.log(largestOddNumber("51"));
// console.log(largestOddNumber("4206"));
// console.log(largestOddNumber("35427"));
// console.log(largestOddNumber("10133890"));

export default largestOddNumber;