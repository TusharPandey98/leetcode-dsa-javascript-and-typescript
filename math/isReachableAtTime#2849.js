/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} fx
 * @param {number} fy
 * @param {number} t
 * @return {boolean}
 */
const isReachableAtTime = (sx, sy, fx, fy, t) => {
    const width = Math.abs(sx - fx);
    const height = Math.abs(sy - fy);
    if (width === 0 && height === 0 && t === 1) return false;
    return t >= Math.max(width, height);
};

// console.log(isReachableAtTime(2, 4, 7, 7, 6));
// console.log(isReachableAtTime(3, 1, 7, 3, 3));

export default isReachableAtTime;