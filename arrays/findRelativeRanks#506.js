/**
 * @param {number[]} score
 * @return {string[]}
 */
// const findRelativeRanks = (score) => {
//     const sortedScore = Array.from(score);
//     sortedScore.sort((a, b) => b - a);
//     const rankMap = new Map();
//     for (let i = 0; i < sortedScore.length; i++) {
//         const element = sortedScore[i];
//         if (i == 0) rankMap.set(element, 'Gold Medal')
//         else if (i == 1) rankMap.set(element, 'Silver Medal')
//         else if (i == 2) rankMap.set(element, 'Bronze Medal')
//         else rankMap.set(element, `${i + 1}`);

//     }

//     const result = [];
//     for (let j = 0; j < score.length; j++) {
//         const element = score[j];
//         if(rankMap.has(element)) result.push(rankMap.get(element));
//     }
//     return result;
// };

const findRelativeRanks = (score) => {
    const sortedScore = [...score].sort((a, b) => b - a);
    const medals = ["Gold Medal", "Silver Medal", "Bronze Medal"];
    const rankMap = new Map(sortedScore.map((s, i) => [s, i < 3 ? medals[i] : (i + 1).toString()]));
    return score.map((s) => rankMap.get(s));
};

// console.log(findRelativeRanks([10, 3, 8, 9, 4]));
// console.log(findRelativeRanks([5, 4, 3, 2, 1]));
// console.log(findRelativeRanks([1]));

// [10, 3, 8, 9, 4]
// [10, 9, 8, 4, 3]

export default findRelativeRanks;