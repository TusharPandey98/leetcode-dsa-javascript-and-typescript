/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
const findWinners = (matches) => {
    const playerStats = new Map();

    matches.forEach(([winner, loser]) => {
        playerStats.set(winner, { win: (playerStats.get(winner)?.win || 0) + 1, lost: playerStats.get(winner)?.lost || 0 });
        playerStats.set(loser, { win: playerStats.get(loser)?.win || 0, lost: (playerStats.get(loser)?.lost || 0) + 1 });
    });

    const result = [[], []];
    const sortedMap = new Map([...playerStats].sort((a, b) => a[0] - b[0]));
    sortedMap.forEach((value, key) => {
        if (value.win >= 0 && value.lost === 0) result[0].push(key);
        if (value.lost === 1) result[1].push(key);
    });

    return result;
};

export default findWinners;