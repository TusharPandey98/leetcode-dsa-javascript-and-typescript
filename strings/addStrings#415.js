/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = (num1, num2) => {
    let result = [], carry = 0;
    let i = num1.length - 1, j = num2.length - 1;

    while (i >= 0 || j >= 0 || carry) {
        const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
        const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
        const sum = digit1 + digit2 + carry;

        carry = Math.floor(sum / 10);
        result.unshift(sum % 10);
        i--; j--;
    }
    return result.join('');
};

// console.log(addStrings('21', '213'));
// console.log(addStrings('11', '123'));
// console.log(addStrings("9333852702227987", "85731737104263"));
export default addStrings;