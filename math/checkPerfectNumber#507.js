/**
 * @param {number} num
 * @return {boolean}
 */
// const checkPerfectNumber = (num) => {
//     if (num <= 0) return false;
//     let result = 0;
//     let i = 1;
//     while (i <= num - 1) {
//         if (num % i == 0) result += i;
//         i++;
//     }
//     return result === num
// };

const checkPerfectNumber = (num) => {
    if (num <= 1) return false;

    let sumDivisors = 1;

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            sumDivisors += i;

            const secondFactor = num / i;
            if (i !== secondFactor) {
                sumDivisors += secondFactor;
            }
        }
    }

    return sumDivisors === num;
}



// console.log(checkPerfectNumber(28));
// console.log(checkPerfectNumber(8));
// console.log(checkPerfectNumber(6));
// console.log(checkPerfectNumber(5));
// console.log(checkPerfectNumber(2016));

export default checkPerfectNumber;