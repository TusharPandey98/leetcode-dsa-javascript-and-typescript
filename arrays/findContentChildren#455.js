/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
// const findContentChildren = (g, s) => {
//     g = g.sort((a, b) => a - b)
//     s = s.sort((a, b) => a - b)
//     // console.log(g);
//     let i = 0;
//     for (let j = 0; i < g.length && j < s.length; j++) {

//         if (s[j] >= g[i]) i++;
//     }
//     return i;
// };

//using two pointer

const findContentChildren = (g, s) => {
    g = g.sort((a, b) => a - b);
    s = s.sort((a, b) => a - b);

    let indexOfG = 0, indexOfS = 0;
    while (indexOfG < g.length && indexOfS < s.length) {
        if (g[indexOfG] <= s[indexOfS]) {
            indexOfG++;
            indexOfS++;
        } else indexOfS++;
    }

    return indexOfG;
}


// console.log(findContentChildren([1, 2, 3], [1, 1]));
// console.log(findContentChildren([1, 2], [1, 2, 3]));
// console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]));
// console.log(findContentChildren([7, 8, 9, 10], [5, 6, 7, 8]));

export default findContentChildren;