/**
 * @param {number} area
 * @return {number[]}
 */
// const constructRectangle = (area) => {
//     let length = 0, width = 0;
//     let factors = 0 , sqaureLength = Math.sqrt(area);

//     // if(Math.sqrt(area))

//     for (let i = 1; i <= sqaureLength; i++) {
//         if (area % i == 0) factors = i;
//     }

//     return [area / factors, factors];
//     return factors
// };

//more optimized
// const constructRectangle = (area) => {
//     let width = Math.floor(Math.sqrt(area));

//     while (area % width !== 0) {
//         width--;
//     }

//     const length = area / width;

//     return [length, width];
// };

//
const constructRectangle = (area) => {
    let width = Math.floor(Math.sqrt(area));
    while (true) {
        if (area % width === 0) return [area / width, width];
        width--;
    }
}


// console.log(constructRectangle(12));
// console.log(constructRectangle(4));
// console.log(constructRectangle(16));
// console.log(constructRectangle(37));
// console.log(constructRectangle(122122));

export default constructRectangle