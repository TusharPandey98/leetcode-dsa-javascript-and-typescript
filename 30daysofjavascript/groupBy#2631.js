/**
 * @param {Function} fn
 * @return {Array}
 */

/** Simple for each approach */
Array.prototype.groupBy = function (fn) {
    let groupObject = {};
    this.forEach(element => {
        let objKey = fn(element);
        if (groupObject[objKey]) {
            groupObject[objKey].push(element);
        } else {
            groupObject[objKey] = [];
            groupObject[objKey].push(element);
        }
    })
    return groupObject;
};


/*Using Array.reduce method*/
// Array.prototype.groupBy = function(fn) {
//     return this.reduce((grouped, item) => {
//         const key = fn(item);
//         if (!grouped[key]) {
//             grouped[key] = [];
//         }
//         grouped[key].push(item);
//         return grouped;
//     }, {})
// }
// let initialTIme = performance.now();
// console.log(initialTIme);
// console.log([1, 2, 3].groupBy(String)) // {"1":[1],"2":[2],"3":[3]}
// console.log([
//     { "id": "1" },
//     { "id": "1" },
//     { "id": "2" }
// ].groupBy(fn = function (item) {
//     return item.id;
// })) // {"1":[1],"2":[2],"3":[3]}

// console.log(performance.now() -initialTIme);

module.exports =  Array.prototype.groupBy;
