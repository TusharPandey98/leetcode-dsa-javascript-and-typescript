/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = (pattern, s) => {
    const words = s.split(' ');
    if (pattern.length !== words.length) {
        return false;
    }

    const patternMap = new Map();
    const usedWords = new Set();
    
    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        if (!patternMap.has(char)) {
            if (usedWords.has(words[i])) {
                return false;
            }
            patternMap.set(char, words[i]);
            usedWords.add(words[i]);
        } else if (patternMap.get(char) !== words[i]) {
            return false;
        }
    }
    
    return true;
};

// console.log(wordPattern("abba", "dog cat cat dog")); // true
// console.log(wordPattern("abba", "dog cat cat fish")); // false
// console.log(wordPattern("aaaa", "dog cat cat dog")); // false
// console.log(wordPattern("aaaa", "dog dog dog dog")); // true
// console.log(wordPattern("abba", "dog dog dog dog")); // false
// console.log(wordPattern("abc", "dog cat dog")); // false

export default wordPattern;

