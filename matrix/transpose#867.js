/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const transpose = (matrix) => {
    const rows = matrix.length, cols = matrix[0].length;
    const newMatrix = new Array(cols).fill(0).map(() => new Array(rows).fill(0));
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            newMatrix[c][r] = matrix[r][c]
        }
    }
    return newMatrix;
};

// console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// console.log(transpose([[1,2,3],[4,5,6]]));

export default transpose