import countBits from "./countBits#338";

describe('countBits', () => {
    it('should return the correct number of set bits for each number up to n', () => {
        expect(countBits(0)).toEqual([0]);
        expect(countBits(1)).toEqual([0, 1]);
        expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
        expect(countBits(10)).toEqual([0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2]);
    });

    it('should handle edge cases', () => {
        expect(countBits(-1)).toEqual([]);
    });
});
