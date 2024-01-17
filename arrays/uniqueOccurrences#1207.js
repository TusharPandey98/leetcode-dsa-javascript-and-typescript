/**
 * @param {number[]} arr
 * @return {boolean}
 */
// const uniqueOccurrences = (arr) => {
//     const countMap = new Map();
//     arr.forEach(num => countMap.set(num , (countMap.get(num)|| 0) + 1));

//     const uniqueMap = new Map();
//     for (const [key,value] of countMap) {
//         if(uniqueMap.has(value)) return false;
//         uniqueMap.set(value,key);
//     }
//     return true;
// };

/**second approach */

const uniqueOccurrences = (arr) => {
    const countMap = new Map();

    arr.forEach(num => countMap.set(num, (countMap.get(num) || 0) + 1));
    
    const occurrenceSet = new Set(countMap.values());
    
    return occurrenceSet.size === countMap.size;
};


// console.log(uniqueOccurrences([1,2,2,1,1,3]));

export default uniqueOccurrences;