/**
 * @param {number} turnedOn
 * @return {string[]}
 */
// const readBinaryWatch = function (num) {
//     const times = [];
//     for (let h = 0; h < 12; h++) {
//         for (let m = 0; m < 60; m++) {
//             const hOnes = h ? h.toString(2).match(/1/g).length : 0;
//             const mOnes = m ? m.toString(2).match(/1/g).length : 0;
//             if (hOnes + mOnes === num) {
//                 times.push(`${h}:${m < 10 ? `0${m}` : m}`);
//             }
//         }
//     }
//     return times;
// }


//
const readBinaryWatch = (turnedOn) => {
    const results = [];

    // Helper function to count the number of set bits (1s) in a binary number
    const countBits = (num) => {
        let count = 0;
        while (num > 0) {
            count += num & 1;
            num >>= 1;
        }
        return count;
    };

    // Generate all possible combinations of hours and minutes
    for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {
            // Count the number of set bits in hours and minutes
            const totalBits = countBits(h) + countBits(m);

            if (totalBits === turnedOn) {
                // Format the time as "h:mm"
                const formattedTime = `${h}:${m < 10 ? '0' + m : m}`;
                results.push(formattedTime);
            }
        }
    }

    return results;
};

// console.log(readBinaryWatch(9));
// console.log(readBinaryWatch(0));
// console.log(readBinaryWatch(1));

// export default readBinaryWatch;