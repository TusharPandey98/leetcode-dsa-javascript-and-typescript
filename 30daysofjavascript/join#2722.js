/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
//Using Map
// const join = function (arr1, arr2) {
//     const combineArray = arr1.concat(arr2);
//     const map = {};
//     combineArray.forEach(item => {
//         const id = item.id;
//         if(!map[id]){
//             map[id] = item;
//         }
//         map[id] = {...map[id],...item};
//     })
//     const joinedArray = Object.values(map);
//     joinedArray.sort((a, b) => a.id - b.id)
//     return joinedArray;
// };

//Using twoPointer
const join = function(arr1, arr2) {
    const arr = []
    let i = 0
    let j = 0

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i].id < arr2[j].id) {
            arr.push(arr1[i])
            i++
        } else if (arr1[i].id > arr2[j].id) {
            arr.push(arr2[j])
            j++
        } else {
            let tmp = arr1[i]
            Object.assign(tmp, arr2[j])
            arr.push(tmp)
            i++
            j++
        }
    }

    while (i < arr1.length) {
        arr.push(arr1[i])
        i++
    }

    while (j < arr2.length) {
        arr.push(arr2[j])
        j++
    }

    return arr
};
let arr1 = [{"id":1,"b":{"b": 94},"v":[4,3],"y":48}]
let arr2 = [{"id":1,"b":{"c": 84},"v":[1,3]}]

console.log(join(arr1, arr2));