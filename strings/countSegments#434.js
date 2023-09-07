/**
 * @param {string} s
 * @return {number}
 */
// const countSegments = (s) => {
//     let result = [], word = '';

//     for (const char of s) {
//         if (char != ' ' && (word == '' || word != '')) {
//             word += char;
//         } else if (char == ' ' && word != '') {
//             result.push(word);
//             word = ''
//         } else {
//             continue;
//         }
//     }
//     if(word !== '') result.push(word);
//     return result.length;
// };

// more consice and optimized 
// const countSegments = (s) => {
//     return s.split(' ').filter(word => word !== '').length;
// };

//using regex
// const countSegments = (s) => {
//     const segments = s.match(/\S+/g) || []; // Match non-space segments
//     return segments.length;
// };

//in place approach

const countSegments = (s) => {
    let segmentCount = 0;

    for (let i = 0; i < s.length; i++) {
        if ((i == 0 || s.charAt(i - 1) == ' ') && s.charAt(i) !== ' ') segmentCount++;
    }
    return segmentCount;
};



// console.log(countSegments("Hello, my name is John"));//5
// console.log(countSegments("                "));//0
// console.log(countSegments(""));//0
// console.log(countSegments(", , , ,        a, eaefa"));//6

export default countSegments;