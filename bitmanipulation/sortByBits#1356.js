/**
 * @param {number[]} arr
 * @return {number[]}
 */
const sortByBits = (arr) => {
    arr.sort((a, b) => {
        if (findWeight(a) === findWeight(b)) {
            return a - b;
        }
        return findWeight(a) - findWeight(b);
    });
    return arr;
};

const findWeight = (num) => {
    let weight = 0;

    while (num > 0) {
        if (num > 0) {
            weight++;
            num &= (num - 1);
        }
    }
    return weight;
}
// const findWeight = (num) => {
//     let weight = 0, mask = 1;

//     while (num > 0) {
//         if ((num & mask) > 0) {
//             weight++;
//             num ^= mask;
//         }
//         mask <<= 1;
//     }
//     return weight;
// }

// console.log(findWeight(2));
// console.log(findWeight(3));
console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]));//[0,1,2,4,8,3,5,6,7]