/**
 * @param {string} s
 * @return {boolean}
 */
// const checkRecord = (s) => {
//     let absentCount = 0, lateCount = 0;
//     for (let j = 0; j < s.length; j++) {
//         const char = s[j];
//         if (char == 'A') absentCount++;

//         if (char == 'L') lateCount++;
//         else lateCount = 0;

//         if (absentCount > 1 || lateCount > 2) return false
//     }
//     return true;
// };

// more optimized

const checkRecord = (s) => {
    let absentCount = 0, lateCount = 0;

    for (let j = 0; j < s.length; j++) {
        const char = s[j];

        if (char === 'A') {
            absentCount++;
            if (absentCount > 1) return false; // More than one 'A'
            lateCount = 0; // Reset late count
        } else if (char === 'L') {
            lateCount++;
            if (lateCount > 2) return false; // More than two consecutive 'L's
        } else {
            lateCount = 0; // Reset late count for valid characters other than 'A' and 'L'
        }
    }

    return true;
};

// console.log(checkRecord("PPALLP"));
// console.log(checkRecord("PPALLL"));
// console.log(checkRecord("LALL"));

export default checkRecord;