/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
    if (s.length === 0) return 0;
    let lengthOfLastWord = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if(s[i] !== ' '){
            lengthOfLastWord++;
        }else{
            if(lengthOfLastWord > 0) return lengthOfLastWord;
        }
    }
    return lengthOfLastWord;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));