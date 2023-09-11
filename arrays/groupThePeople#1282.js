/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
// const groupThePeople = (groupSizes) => {
//     const numberMap = new Map();
//     groupSizes.forEach((num, i) => {
//         if (numberMap.has(num)) {
//             const arr = numberMap.get(num);
//             arr.push(i);
//             numberMap.set(num, arr)
//         } else {
//             numberMap.set(num, [i]);
//         }
//     })
//     const result = [];
//     numberMap.forEach((val, key) => {
//         const arr = val;
//         for (let i = 0; i < val.length; i += key) {
//             result.push(arr.slice(i, i + key))
//         }
//     })
//     return result;
// };

//more optimized using single loop

const groupThePeople = (groupSizes) => {
    const result = [], numberMap = new Map();
    const groupLength = groupSizes.length;

    for (let i = 0; i < groupLength; i++) {
        const size = groupSizes[i];

        if (!numberMap.has(size)) {
            numberMap.set(size, [])
        }
        const group = numberMap.get(size);
        group.push(i);

        if (group.length === size) {
            result.push(group);
            numberMap.set(size, [])
        }
    }

    return result;
}


// console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3]));

export default groupThePeople;