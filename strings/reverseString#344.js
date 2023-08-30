/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (s) => {
    let left = 0, right = s.length - 1;
    while(left < right){
        [s[left],s[right]] = [s[right],s[left]] 
        left++;
        right--;
    }
};


export default reverseString

// console.log(reverseString(["h","e","l","l","o"]));