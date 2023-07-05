//Valid Parenttheses

// const isValid = (s) => {
//     const stack = [];
//     const openBracket = ['(', '{', '['];
//     const closeBracket = [')', '}', ']'];

//     for (let i = 0; i < s.length; i++) {
//         const char = s[i];

//         if (openBracket.includes(char)) {
//             stack.push(char);
//         } else if (closeBracket.includes(char)) {
//             const correspondingOpenBracket = openBracket[closeBracket.indexOf(char)];

//             if (stack.length === 0 || stack.pop() !== correspondingOpenBracket) {
//                 return false;
//             }
//         }

//     }
//     return stack.length == 0
// }
export default isValid = (s) => {
    const stack = [];

    for (const char of s) {
        if(char === '('){
            stack.push(')')
        }else if(char === '{'){
            stack.push('}')
        }else if(char === '['){
            stack.push(']')
        }else if(stack.length === 0 || stack.pop() !== char){
            return false;
        }
    }
    return stack.length == 0
}

// console.log(isValid('[{()}]'))
// console.log(isValid('{()}'))
// console.log(isValid('()'))
// console.log(isValid('(){}[]'))
// console.log(isValid('(]'))
// console.log(isValid('('))
// console.log(isValid('}'))

