/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
// const matrixReshape = (mat, r, c) => {
//     const m = mat.length, n = mat[0].length;
//     if (m * n !== r * c) return mat;
//     mat = mat.flat();
//     const resultMatrix = [];

//     for (let row = 0; row < r; row++) {
//         resultMatrix.push(mat.slice(row * c, (row + 1) * c));
//     }

//     return resultMatrix;
// };


//more optimized 

const matrixReshape = (mat, r, c) => {
    const m = mat.length;
    const n = mat[0].length;

    // Check if reshape is possible
    if (m * n !== r * c) {
        return mat;
    }

    // Initialize the reshaped matrix
    const reshapedMat = new Array(r);
    for (let i = 0; i < r; i++) {
        reshapedMat[i] = new Array(c);
    }

    // Initialize indices for both matrices
    let originalRow = 0;
    let originalCol = 0;
    let newRow = 0;
    let newCol = 0;

    // Populate the reshaped matrix while iterating through the original matrix
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            reshapedMat[newRow][newCol] = mat[originalRow][originalCol];

            // Update indices
            originalCol++;
            if (originalCol === n) {
                originalCol = 0;
                originalRow++;
            }
            newCol++;
            if (newCol === c) {
                newCol = 0;
                newRow++;
            }
        }
    }

    return reshapedMat;
}

// console.log(matrixReshape([[1, 2], [3, 4]], 1, 4));

export default matrixReshape;
