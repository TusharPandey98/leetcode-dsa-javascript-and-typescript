/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
// const findPoisonedDuration = (timeSeries, duration) => {
//     const l = timeSeries.length;
//     if (l === 0) return 0;
//     let timerCount = 0;
//     for (let i = 0; i < l - 1; i++) {
//         timerCount += Math.min(timeSeries[i + 1] - timeSeries[i], duration);
//     }
//     return timerCount + duration;
// };

//simple
const findPoisonedDuration = (timeSeries, duration) => {
    const l = timeSeries.length;
    if (l === 0) return 0;
    let poisonedDuration = duration;
    for (let i = 0; i < l - 1; i++) {
        const diff = timeSeries[i + 1] - timeSeries[i];
        poisonedDuration += diff > duration ? duration : diff
    }
    return poisonedDuration;
};

console.log(findPoisonedDuration([1, 2], 2));

export default findPoisonedDuration;