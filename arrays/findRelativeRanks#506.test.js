import findRelativeRanks from "./findRelativeRanks#506";

describe('findRelativeRanks', () => {
    it('should return ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"] for input [5, 4, 3, 2, 1]', () => {
        const result = findRelativeRanks([5, 4, 3, 2, 1]);
        expect(result).toEqual(["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]);
    });

    it('should return ["Gold Medal"] for input [10]', () => {
        const result = findRelativeRanks([10]);
        expect(result).toEqual(["Gold Medal"]);
    });

    it('should return ["Gold Medal", "Silver Medal"] for input [50, 30]', () => {
        const result = findRelativeRanks([50, 30]);
        expect(result).toEqual(["Gold Medal", "Silver Medal"]);
    });

    it('should return ["Silver Medal", "Bronze Medal", "4", "Gold Medal","5", "6"] for input [5, 4, 3, 6, 2, 1]', () => {
        const result = findRelativeRanks([5, 4, 3, 6, 2, 1]);
        expect(result).toEqual(["Silver Medal", "Bronze Medal", "4", "Gold Medal","5", "6"]);
    });

    it('should return [] for an empty input array', () => {
        const result = findRelativeRanks([]);
        expect(result).toEqual([]);
    });
});
