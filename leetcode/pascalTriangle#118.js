/**
 * @param {number} numRows
 * @return {number[][]}
 */

/**Brute force approach */
// const generate =  (numRows) => {
//     if (numRows === 0) return [];
//     if (numRows == 1) return [[1]];
//     let result = [];
//     for (let i = 2; i <= numRows; i++) {
//         if(i===2){
//             result.push([1]);
//             result.push([1,1]);
//         }else{
//             const current = result[result.length -1];
//             const newarr = []
//             for (let j = 0; j < current.length; j++) {
//                 if(j == 0 ){
//                     newarr.push(1);
//                 }else{
//                     newarr.push(current[j] + current[j-1]);
//                 }
//             }
//             newarr.push(1);
//             result.push(newarr);
//         }
//     }
//     return result;
// };

/**more optimized brute force */
const generate = (numRows) => {
    const result = [];
    for (let i = 0; i < numRows; i++) {
        const newRow = Array(i + 1).fill(1);
        for (let j = 1; j < i; j++) {
            newRow[j] = result[i - 1][j - 1] + result[i - 1][j];
        }
        result.push(newRow);
    }
    return result;
};
console.log(generate(5));

export default generate;