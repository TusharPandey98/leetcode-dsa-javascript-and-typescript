import dominantIndex from "./dominantIndex#747";

describe('dominantIndex function', () => {
    it('should return 1 for [3, 6, 1, 0]', () => {
        expect(dominantIndex([3, 6, 1, 0])).toBe(1);
    });

    it('should return -1 for [1, 2, 3, 4]', () => {
        expect(dominantIndex([1, 2, 3, 4])).toBe(-1);
    });

    it('should return 0 for [6, 0, 0, 3]', () => {
        expect(dominantIndex([6, 0, 0, 3])).toBe(0);
    });

    it('should return 0 for [1]', () => {
        expect(dominantIndex([1])).toBe(0);
    });

    it('should return -1 for [1, 1]', () => {
        expect(dominantIndex([1, 1])).toBe(-1);
    });

    it('should return -1 for [0, 0, 3, 2]', () => {
        expect(dominantIndex([0, 0, 3, 2])).toBe(-1);
    });
});
