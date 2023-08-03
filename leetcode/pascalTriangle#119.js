/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = (rowIndex) => {
    if (rowIndex < 0) return [];
    const row = new Array(rowIndex + 1).fill(1);
    for (let i = 1; i < rowIndex; i++) {
        let prev = 1;
        for (let j = 1; j <= i; j++) {
            const temp = row[j];
            row[j] += prev;
            prev = temp;
        }
    }
    return row;
};
// console.log(getRow(4));
export default getRow;