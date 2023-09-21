/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = (s, k) => {
    const n = s.length;
    let result = '';

    for (let i = 0; i < n; i += 2 * k) {
        const chunk = s.slice(i, i + k);
        const reversedChunk = chunk.split('').reverse().join('');

        result += reversedChunk;

        result += s.slice(i + k, i + 2 * k);
    }

    return result;
}


// console.log(reverseStr('abcdefg', 2));
// console.log(reverseStr('abcd', 3));

export default reverseStr;