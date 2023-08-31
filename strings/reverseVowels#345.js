/**
 * @param {string} s
 * @return {string}
 */
//using two pointer approach
// const reverseVowels = (s) => {
//     s = s.split('')
//     const vowels = ['a','e','i','o','u','A','E','I','O','U'];
//     let left = 0 , right = s.length - 1;

//     while(left < right){
//         if(vowels.includes(s[left]) && vowels.includes(s[right])){
//             [s[left],s[right]] = [s[right],s[left]];
//             left++;
//             right--;
//         }else if(!vowels.includes(s[left])){
//             left++;
//         }else if(!vowels.includes(s[right])){
//             right--;
//         }
//     }
//     return s.join('');
// };

//using hash set
const reverseVowels = (s) => {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let left = 0, right = s.length - 1;
    const arr = s.split('');

    while (left < right) {
        while (left < right && !vowels.has(s[left])) {
            left++;
        }
        while (left < right && !vowels.has(s[right])) {
            right--;
        }

        if (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return arr.join('');
};

console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));

export default reverseVowels;