/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
// var isEmpty = function(obj) {
//     for (const _ in obj) return false;
//     return true;
// };
// var isEmpty = function(obj) {
//     return Object.keys(obj).length === 0
//   };

//   var isEmpty = function(obj) {
//     if(Array.isArray(obj)) {
//         return obj.length > 0 ? false : true;
//     } else if(typeof obj === 'object') {
//         return Object.keys(obj).length > 0 ? false : true;
//     }
// };

var isEmpty = function(obj) {
    if (JSON.stringify(obj).length <= 2) return true
    else return false
};
console.log(isEmpty({"x": 5, "y": 42}));
console.log(isEmpty({}));
console.log(isEmpty([]));