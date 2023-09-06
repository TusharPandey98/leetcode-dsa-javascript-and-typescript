/**
 * @param {number} n
 * @return {string[]}
 */
// const fizzBuzz = (n) => {
//     let result = [];
//     for (let i = 1; i <= n; i++) {
//         let isDivisibleBy3 = (i % 3 === 0)
//         let isDivisibleBy5 = (i % 5 === 0)
//         if (isDivisibleBy3 && isDivisibleBy5) result.push("FizzBuzz");
//         else if (isDivisibleBy3) result.push('Fizz');
//         else if (isDivisibleBy5) result.push('Buzz');
//         else result.push(`${i}`);
//     }
//     return result;
// };


// more optimized and concise
// const fizzBuzz = (n) => {
//     const result = [];
//     for (let i = 1; i <= n; i++) {
//         let entry = '';
//         if (i % 3 === 0) entry += 'Fizz';
//         if (i % 5 === 0) entry += 'Buzz';
//         result.push(entry || `${i}`);
//     }
//     return result;
// };

//using array method
const fizzBuzz = (n) => {
    return Array.from({ length: n }, (_, i) => {
        i += 1;
        return i % 3 === 0 && i % 5 === 0 ? 'FizzBuzz'
            : i % 3 === 0 ? 'Fizz'
                : i % 5 === 0 ? 'Buzz'
                    : `${i}`;
    })
}

// console.log(fizzBuzz(3));
// console.log(fizzBuzz(5));
// console.log(fizzBuzz(15));
export default fizzBuzz;