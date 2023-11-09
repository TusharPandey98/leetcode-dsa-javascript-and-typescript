/**
 * @param {string} s
 * @return {number}
 */
const countHomogenous = (s) => {
    let total = 0;
    let prevCount = 1;
    let mod = 1e9 + 7;
    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] === s[i]) {
            prevCount++
        } else if (prevCount > 1) {
            total += calculateSum(prevCount);
            prevCount = 1;
        } else {
            total += 1;
        }
    }

    if (prevCount > 1) {
        total += calculateSum(prevCount);
    } else {
        total += 1;
    }
    return total  % mod;
};

const calculateSum = (number) => {
    return (number * (number + 1)) / 2;
}

/**
 * a = 1;
 * aa = 2+1 = 3;
 * aaa = 3 + 2 + 1 = 6;
 * aaaa = 4 + 3 + 2 + 1 = 10;
 * aaaaa = 5 + 4 + 3 + 2 + 1 = 15;
 */

// console.log(countHomogenous('abbcccaa'));
// console.log(countHomogenous('xy'));
// console.log(countHomogenous('zz'));
// console.log(countHomogenous('zzz'));
// console.log(countHomogenous('zzzx'));
// console.log(countHomogenous('zzzzz'));

export default countHomogenous;