/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
// var chunk = function (arr, size) {
//     if(arr.length === 0) return arr;
//     let chunkedArr = [];
//     if (arr.length > size) {
//         for (let i = 0; i < arr.length; ) {
//             let newArr = arr.splice(i,size);
//             chunkedArr.push(newArr);
//         }
//     } else {
//         chunkedArr.push(arr);
//     }
//     return chunkedArr;
// };

var chunk = function (arr, size) {
    if (arr.length === 0) return arr;
    let chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
        let newArr = arr.slice(i, i + size);
        chunkedArr.push(newArr);
    }
    return chunkedArr;
};

// console.log(chunk([1,2,3,4,5],1));
// console.log(chunk([1,9,6,3,2],3));
console.log(chunk([8, 5, 3, 2, 6], 6));
console.log(chunk([], 1));