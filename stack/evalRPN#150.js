/**
 * @param {string[]} tokens
 * @return {number}
 */
// const evalRPN = (tokens) => {
//     const operationalStack = [];
//     tokens.forEach((element => {
//         if (['+', '-', '*', '/'].includes(element)) {
//             const [second, first] = [operationalStack.pop(), operationalStack.pop()];
//             if (element == '+') {
//                 let result = +first + +second;
//                 operationalStack.push(result);

//             } else if (element == '-') {
//                 let result = +first - +second;
//                 operationalStack.push(result);
//             }
//             else if (element == '*') {
//                 let result = +first * +second;
//                 operationalStack.push(result);
//             }
//             else if (element == '/') {
//                 if (second != 0) {
//                     let result = +first / +second;
//                     operationalStack.push(Math.trunc(result));
//                 }
//             }
//         } else {
//             operationalStack.push(element);
//         }
//     }))
//     return operationalStack[0] || 0;
// };

//more concise and readable;
const evalRPN = (tokens) => {
    const stack = [];
    const operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => (b !== 0) ? Math.trunc(a / b) : 0,
    };

    tokens.forEach((element) => {
        if (operators.hasOwnProperty(element)) {
            const [second, first] = [stack.pop(), stack.pop()];
            stack.push(operators[element](first, second));
        } else {
            stack.push(parseInt(element));
        }
    });

    return stack.pop() || 0;
};


// console.log(evalRPN(["2", "1", "+", "3", "*"]));
// console.log(evalRPN(["2", "1", "+", "0", "/"]));
// console.log(evalRPN([]));
// console.log(evalRPN(["4", "13", "5", "/", "+"]));
// console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));

export default evalRPN;