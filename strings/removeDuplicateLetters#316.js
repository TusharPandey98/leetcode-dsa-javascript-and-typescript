/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicateLetters = (s) => {
    const stack = [];
    const seen = new Set();

    const lastOccurance = {};

    const strLength = s.length;

    for (let i = 0; i < strLength; i++) {
        lastOccurance[s[i]] = i;
    }


    for (let j = 0; j < strLength; j++) {
        const char = s[j];

        if (!seen.has(char)) {
            const stackTopElement = stack[stack.length - 1];
            while (stack.length > 0 &&
                char < stackTopElement &&
                j < lastOccurance[stackTopElement]) {

                seen.delete(stack.pop())
            }

            seen.add(char);
            stack.push(char);
        }
    }

    return stack.join('');
};


// console.log(removeDuplicateLetters("cbacdcbc"));//acdb
console.log(removeDuplicateLetters("bcabc"));