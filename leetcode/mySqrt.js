/**
 * @param {number} x
 * @return {number}
 */
// var mySqrt = function(x) {
//     if(x<=0) return 0
//     for (let i = 0; i <= x; i++) {
//         if(i*i == x){
//             return i;
//         }else if(i*i > x){
//             return i-1;
//         }
//     }
// };
// var mySqrt = function (x) {
//     if (x <= 0) return 0;
//     let i = 1;
//     for (; i <= x / i; i++) {
//         if (x / i == i) {
//             return i;
//         }
//     }
//     return i - 1;
// }

// const mySqrt = (x) => {
//     let r = x;
//     while (r * r > x) {
//         r = ((r + x / r) / 2) | 0;
//     }
//     return r;
// }
const mySqrt = (x) => {
    let initialGuess = 1;
    let r = x;
    while (r * r > x) {
        r = ((r + x / r) / 2) | 0;
    }
    return r;
}
console.log(mySqrt(1));
console.log(mySqrt(8));
console.log(mySqrt(15));
console.log(mySqrt(1.5));