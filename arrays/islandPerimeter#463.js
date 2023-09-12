/**
 * @param {number[][]} grid
 * @return {number}                                  
 */
const islandPerimeter = (grid) => {
    const rows = grid.length;
    const cols = rows ? grid[0].length : 0;
    let perimeter = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                perimeter += 4;

                if (i > 0 && grid[i - 1][j] === 1) perimeter -= 2;
                if (j > 0 && grid[i][j - 1] === 1) perimeter -= 2;
            }
        }
    }

    return perimeter;
};
// console.log(islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]));

// [
//     [0, 1, 0, 0],
//     [1, 1, 1, 0],
//     [0, 1, 0, 0],
//     [1, 1, 0, 0]
// ]

export default islandPerimeter;