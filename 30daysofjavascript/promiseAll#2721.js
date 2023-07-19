/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
// const promiseAll = async function (functions) {
//     return new Promise((resolve, reject) => {
//         if (functions.length === 0) {
//             resolve([]);
//             return;
//         }

//         const res = new Array(functions.length).fill(null);

//         let resolvedCount = 0;

//         functions.forEach(async (fn, idx) => {
//             try {
//                 const subResult = await fn();
//                 res[idx] = subResult;
//                 resolvedCount++;
//                 if (resolvedCount === functions.length) {
//                     resolve(res);
//                 }
//             } catch (error) {
//                 reject(error);
//             }

//         })
//     })
// };

/** Using Map */
var promiseAll = async function (functions) {

    return new Promise((resolve, reject) => {
        let result = [];
        let resolvedPromise = 0;
        functions.map((func, index) => {
            func().then((res) => {
                result[index] = res;
                resolvedPromise += 1;
                if (resolvedPromise === functions.length) {
                    resolve(result);
                }
            }).catch((e) => {
                reject(e);
            });
        });
    });
};

const promise = promiseAll([() => new Promise(res => res(42))])
promise.then(console.log); // [42]
