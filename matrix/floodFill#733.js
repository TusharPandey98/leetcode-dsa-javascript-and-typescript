/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
// const floodFill = (image, sr, sc, newColor) => {
//     const rows = image.length, cols = image[0].length;

//     const dfs = (image, r, c, color, newColor) => {
//         if (image[r][c] === color) {
//             image[r][c] = newColor;
//             if (r >= 1) dfs(image, r - 1, c, color, newColor);
//             if (c >= 1) dfs(image, r, c - 1, color, newColor);
//             if (r + 1 < rows) dfs(image, r + 1, c, color, newColor);
//             if (c + 1 < cols) dfs(image, r, c + 1, color, newColor);
//         }
//     }

//     const color = image[sr][sc];
//     if (color != newColor) dfs(image, sr, sc, color, newColor);

//     return image;
// };

const floodFill = (image, sr, sc, newColor) => {
    const rows = image.length, cols = image[0].length;
    const color = image[sr][sc];

    if (color === newColor) return image;

    const dfs = (r, c) => {
        if (r < 0 || r >= rows || c < 0 || c >= cols || image[r][c] !== color) return;

        image[r][c] = newColor;
        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    };

    dfs(sr, sc);
    return image;
};




// console.log(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2));
// console.log(floodFill([[0, 0, 0], [0, 0, 0]], 0, 0, 0));

export default floodFill;