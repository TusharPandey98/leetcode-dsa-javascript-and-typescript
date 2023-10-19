/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// const backspaceCompare = (s, t) => {
//     const sAfterBackSpace = [];
//     const tAfterBackSpace = [];
//     for (const char of s) {
//         if(char === '#'){
//             sAfterBackSpace.pop();
//             continue;
//         } 
//         sAfterBackSpace.push(char)
//     }
//     for (const char of t) {
//         if(char === '#'){
//             tAfterBackSpace.pop();
//             continue;
//         } 
//         tAfterBackSpace.push(char)
//     }

//     return sAfterBackSpace.join('') === tAfterBackSpace.join('')
// };

//follow up TC O(n) and SC O(1);
const backspaceCompare = (s, t) => {
    let sPointer = s.length - 1;
    let tPointer = t.length - 1;
    let sBackspaceCount = 0;
    let tBackspaceCount = 0;

    while (sPointer >= 0 || tPointer >= 0) {
        while (sPointer >= 0 && (s[sPointer] === '#' || sBackspaceCount > 0)) {
            if (s[sPointer] === '#') {
                sBackspaceCount++;
            } else {
                sBackspaceCount--;
            }
            sPointer--;
        }

        while (tPointer >= 0 && (t[tPointer] === '#' || tBackspaceCount > 0)) {
            if (t[tPointer] === '#') {
                tBackspaceCount++;
            } else {
                tBackspaceCount--;
            }
            tPointer--;
        }

        if (sPointer < 0 || tPointer < 0) {
            return sPointer === tPointer;
        }

        if (s[sPointer] !== t[tPointer]) {
            return false;
        }

        sPointer--;
        tPointer--;
    }

    return true;
};

// console.log(backspaceCompare("ab#c", 'ad#c'));
// console.log(backspaceCompare("ab##", 'c#d#'));
// console.log(backspaceCompare("a#c", 'b'));

export default backspaceCompare;