/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
const eliminateMaximum = (dist, speed) => {
    const distLength = dist.length;
    const arrival = new Array(distLength);
    dist.forEach((distance, i) => {
        arrival[i] = distance / speed[i];
    });
    arrival.sort((a, b) => a - b);
    let ans = 0;
    for (let i = 0; i < arrival.length; i++) {
        if (arrival[i] <= i) break;
        ans++;
    }
    return ans;
};

// console.log(eliminateMaximum([1, 3, 4], [1, 1, 1]));
// console.log(eliminateMaximum([1, 1, 2, 3], [1, 1, 1, 1]));
// console.log(eliminateMaximum([3, 2, 4], [5, 3, 2]));

export default eliminateMaximum;