/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
    const magMap = new Map();

    // Count characters in the magazine
    for (const char of magazine) {
        magMap.set(char, (magMap.get(char) || 0) + 1);
    }

    // Check if characters in ransomNote can be constructed from magazine
    for (const char of ransomNote) {
        if (!magMap.has(char) || magMap.get(char) === 0) {
            return false;
        }
        magMap.set(char, magMap.get(char) - 1);
    }

    return true;
};


// console.log(canConstruct('aa', 'aab'));
// console.log(canConstruct('a', 'b'));
// console.log(canConstruct('aa', 'ab'));
// console.log(canConstruct('bg', "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"));
// console.log(canConstruct("fihjjjjei", "hjibagacbhadfaefdjaeaebgi"));

export default canConstruct;