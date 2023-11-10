import restoreArray from "./restoreArray#1743";

describe('restoreArray test cases', () => {
    it('should restore the original array for the given adjacentPairs (Example 1)', () => {
        const adjacentPairs = [[2, 1], [3, 4], [3, 2]];
        const result = restoreArray(adjacentPairs);
        expect(result).toEqual([1, 2, 3, 4]);
    });

    it('should restore the original array for the given adjacentPairs (Example 2)', () => {
        const adjacentPairs = [[4, -2], [1, 4], [-3, 1]];
        const result = restoreArray(adjacentPairs);
        // The result can be [-2, 4, 1, -3] or [-3, 1, 4, -2]
        expect(result).toEqual([-2, 4, 1, -3]);
    });

    it('should restore the original array for the given adjacentPairs (Example 3)', () => {
        const adjacentPairs = [[100000, -100000]];
        const result = restoreArray(adjacentPairs);
        expect(result).toEqual([100000, -100000]);
    });

    // Add more test cases as needed
});
