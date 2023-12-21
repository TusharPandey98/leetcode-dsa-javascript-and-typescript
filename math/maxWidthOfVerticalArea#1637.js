/**
 * @param {number[][]} points
 * @return {number}
 */

const maxWidthOfVerticalArea = (points) => {
    points.sort((a, b) => a[0] - b[0]);
    let maxWidth = 0;
    for (let i = 1; i < points.length; i++) {
        maxWidth = Math.max(maxWidth, points[i][0] - points[i - 1][0]);
    }
    return maxWidth
};


// console.log(maxWidthOfVerticalArea([[3, 1], [9, 0], [1, 0], [1, 4], [5, 3], [8, 8]]));

export default maxWidthOfVerticalArea;