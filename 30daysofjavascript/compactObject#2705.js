/**
 * @param {Object} obj
 * @return {Object}
 */
// const compactObject = (obj) => {
//     for (const key in obj) {
//         const value = obj[key];
//         if (Array.isArray(value)) {
//             obj[key] = value.filter(item => item !== false && item !== null);
//         } else {
//             if (value === false || value === null) {
//                 delete obj[key];
//             }
//         }
//         // console.log(value);
//     }
//     return obj;
// };

// const compactObject = (obj) => {
//     return dfs(obj);
// }

// const dfs = (obj) => {
//     if (!obj) return false;
//     if (typeof obj !== 'object') return obj;

//     if (Array.isArray(obj)) {
//         const newArr = [];
//         for (let i = 0; i < obj.length; i++) {
//             const current = obj[i];
//             const subResult = dfs(current);

//             if (subResult) {
//                 newArr.push(subResult);
//             }
//         }
//         return newArr;
//     }

//     const newObj = {};

//     for(const key in obj){
//         const subResult = dfs(obj[key]);
//         if(subResult){
//             newObj[key] = subResult;
//         }
//     }
//     return newObj;
// }

/** Iterative approach using stack */
// function compactObject(obj) {
//     const stack = [[obj, Array.isArray(obj) ? [] : {}]];
//     let newObj = stack[0][1];

//     while(stack.length > 0) {
//         const [currObj, newCurrObj] = stack.pop();

//         for(const key in currObj) {
//             const val = currObj[key];

//             if(!val) continue;
            
//             if(typeof val !== 'object') {
//                 Array.isArray(newCurrObj) ? newCurrObj.push(val) : newCurrObj[key] = val;
//                 continue;
//             }

//             const newSubObj = Array.isArray(val) ? [] : {};
//             Array.isArray(newCurrObj) ? newCurrObj.push(newSubObj) : newCurrObj[key] = newSubObj;
//             stack.push([val, newSubObj]);
//         }
//     }

//     return newObj;
// }

var compactObject = function(obj) {
    // These three if statements deal with when obj is not an iterable object
    // Steps 1-3 as described above
    if (obj === null) return null;
    if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
    if (typeof obj !== "object") return obj;

    // This for loop deals with when obj is an iterable object
    // Steps 4-5 as described above
    const compacted = {};
    for (const key in obj) {
        let value = compactObject(obj[key]);
        if (Boolean(value)) compacted[key] = value;
    }

    return compacted;
};

const obj = [1, null, 3, 4];
const obj1 = { "a": null, "b": [false, 1] };
const obj2 = [null, 0, 5, [0], [false, 16]];
console.log(compactObject(obj1));
