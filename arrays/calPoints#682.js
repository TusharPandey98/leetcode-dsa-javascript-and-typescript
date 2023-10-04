/**
 * @param {string[]} operations
 * @return {number}
 */
const calPoints = (operations) => {
    const scoreStack = [];
    for (let j = 0; j < operations.length; j++) {
        const currentOperation = operations[j];
        const stackLength = scoreStack.length;
        const prev = scoreStack[stackLength - 1];

        if (currentOperation === '+') {
            const first = scoreStack[stackLength - 2];
            if (first) {
                scoreStack.push(parseInt(first) + parseInt(prev));
            }
        } else if (currentOperation === 'D') {
            scoreStack.push(prev * 2);
        } else if (currentOperation === 'C') {
            scoreStack.pop(prev);
        } else {
            scoreStack.push(parseInt(currentOperation));
        }

    }

    return scoreStack.reduce((prev, current) => prev + current, 0) || 0;
};

// console.log(calPoints(["5", "2", "C", "D", "+"]));
// console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
// console.log(calPoints(["1", "C"]));
// console.log(calPoints(['5', '2', 'C', 'D', '+', 'C', '3']));

export default calPoints;