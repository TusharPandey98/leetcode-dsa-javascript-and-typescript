/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const licenseKeyFormatting = (s, k) => {
    const sanitized = s.replace(/-/g, ''); // Remove all hyphens
    const firstPartLength = sanitized.length % k || k;
    const parts = [sanitized.slice(0, firstPartLength)];

    for (let i = firstPartLength; i < sanitized.length; i += k) {
        parts.push(sanitized.slice(i, i + k));
    }

    return parts.join('-').toUpperCase();
};

//using second string
// const licenseKeyFormatting = (s, k) => {
//     const sanitized = s.replace(/-/g, '');
//     const sanitizedLength = sanitized.length;
//     const firstPartLength = sanitizedLength % k || k;
//     let formatted = '';

//     for (let i = 0; i < sanitizedLength; i++) {
//         if (i > 0 && (i - firstPartLength) % k === 0) {
//             formatted += '-';
//         }
//         formatted += sanitized[i];
//     }

//     return formatted.toUpperCase();
// }

//using left to right approach
// const licenseKeyFormatting = (s, k) => {
//     let totalChars = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (s.charAt(i) != '-') {
//             totalChars++;
//         }
//     }
//     let sizeOfFirstGroup = (totalChars % k);
//     if (sizeOfFirstGroup == 0) {
//         sizeOfFirstGroup = k;
//     }
//     let ans = "";
//     let i = 0;
//     let count = 0;

//     while (i < s.length) {
//         if (count == sizeOfFirstGroup) {
//             count = 0;
//             break;
//         }
//         if (s.charAt(i) != '-') {
//             count++;
//             ans += s.charAt(i).toUpperCase();
//         }
//         i++;
//     }
//     /* This case will only appear if value of k is greater than total number 
//        of alphanumeric characters in string s */
//     if (i >= s.length) {
//         return ans;
//     }
//     ans += ('-');
//     while (i < s.length) {
//         if (s.charAt(i) != '-') {
//             /* Whenever count is equal to k, we put a '-' after each group */
//             if (count == k) {
//                 ans += ('-');
//                 count = 0;
//             }
//             ans += s.charAt(i).toUpperCase();
//             count++;
//         }
//         i++;
//     }
//     return ans;
// }

// console.log(licenseKeyFormatting("5F3Z-2e-9-wp", 4));
// console.log(licenseKeyFormatting("2-4A0r7-4k", 3));//"24-A0R-74K"
export default licenseKeyFormatting;