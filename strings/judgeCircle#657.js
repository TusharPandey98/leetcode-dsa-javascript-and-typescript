/**
 * @param {string} moves
 * @return {boolean}
 */
// const judgeCircle = (moves) => {
//     const movesObj = {
//         'L': [-1, 0],
//         'R': [1, 0],
//         'U': [0, 1],
//         'D': [0, -1],
//     };

//     let origin = [0, 0];

//     for (const move of moves) {
//         const [x, y] = movesObj[move];
//         origin[0] += x;
//         origin[1] += y;
//     }

//     return origin[0] === 0 && origin[1] === 0;
// };


const judgeCircle = (moves) => {
    let x = 0, y = 0;
    for (const move of moves) {
        if (move == 'U') y--;
        else if (move == 'D') y++;
        else if (move == 'L') x--;
        else if (move == 'R') x++;
    }
    return x == 0 && y == 0;
}



// console.log(judgeCircle('UD'));
// console.log(judgeCircle('LL'));
// console.log(judgeCircle('LR'));
// console.log(judgeCircle('LRRL'));
// console.log(judgeCircle('LRR'));

export default judgeCircle;