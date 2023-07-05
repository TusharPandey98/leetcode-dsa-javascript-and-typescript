export default buddyStrings = function (s, goal) {
    if (s.length !== goal.length) return false;
    if(s===goal){
        const charSet =  new Set(s);
        return charSet.size < s.length;
    }
    const mismatchedIndices = [];
    for (let i = 0; i < s.length; i++) {
        if(s[i] !== goal[i]){
            mismatchedIndices.push(i);
        } 
    }
    if(mismatchedIndices.length !==2){
        return false;
    }
    const [i,j] = mismatchedIndices;
    const swappedString = s.split('');
    [swappedString[i],swappedString[j]] = [swappedString[j],swappedString[i]];

    return swappedString.join('') === goal;
};

console.log(buddyStrings("aa", "aa"));