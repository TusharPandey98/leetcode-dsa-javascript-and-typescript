/**
 * @param {string} colors
 * @return {boolean}
 */
// const winnerOfGame = (colors) => {
//     let longestA = 0, longestB = 0;

//     const playersMoves = new Map();
//     playersMoves.set('A', 0);
//     playersMoves.set('B', 0);

//     for (const color of colors) {
//         if (color === 'A') {
//             longestA += 1;

//             if (longestB >= 3) {
//                 const moves = longestB - 2;
//                 playersMoves.set('B', (playersMoves.get('B')) + moves);
//             }

//             longestB = 0;

//         } else {
//             longestB += 1;

//             if (longestA >= 3) {
//                 const moves = longestA - 2;
//                 playersMoves.set('A', (playersMoves.get('A')) + moves);
//             }

//             longestA = 0
//         }
//     }

//     if (longestB >= 3) {
//         const moves = longestB - 2;
//         playersMoves.set('B', (playersMoves.get('B')) + moves);
//     }

//     if (longestA >= 3) {
//         const moves = longestA - 2;
//         playersMoves.set('A', (playersMoves.get('A')) + moves);
//     }

//     return playersMoves.get('A') > playersMoves.get('B');
// };

// const winnerOfGame = (colors) => {
//     let longestA = 0, longestB = 0;
//     let movesA = 0, movesB = 0;

//     for (const color of colors) {
//         if (color === 'A') {
//             longestA++;
//             if (longestA >= 3) {
//                 movesA++;
//             }
//             longestB = 0;
//         } else {
//             longestB++;
//             if (longestB >= 3) {
//                 movesB++;
//             }
//             longestA = 0;
//         }
//     }

//     return movesA > movesB;
// };

const winnerOfGame = (colors) => {
    let alice = 0;
    let bob = 0;

    for (let i = 1; i < colors.length - 1; i++) {
        if (colors.charAt(i - 1) === colors.charAt(i) && colors.charAt(i) === colors.charAt(i + 1)) {
            if (colors.charAt(i) === 'A') {
                alice++;
            } else {
                bob++;
            }
        }
    }

    return alice - bob >= 1;
};
// console.log(winnerOfGame('ABBBBBBBAAA'));
// console.log(winnerOfGame('AAABABB'));
// console.log(winnerOfGame('AA'));
// AAA = 1 AAAA = 2, AAAAA = 3 A AAAA A = 4 

export default winnerOfGame;