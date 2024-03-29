/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = (temperatures) => {
    const resultArr = new Array(temperatures.length).fill(0);
    const stack = [];

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            resultArr[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }

    return resultArr;
};


// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
// console.log(dailyTemperatures([30, 40, 50, 60]));
// console.log(dailyTemperatures([30, 60, 90]));

export default dailyTemperatures;