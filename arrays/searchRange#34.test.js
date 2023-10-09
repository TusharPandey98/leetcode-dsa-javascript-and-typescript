import searchRange from "./searchRange#34";

describe('searchRange function', () => {
    it('should return [3, 4] for [5, 7, 7, 8, 8, 10] and target 8', () => {
        expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4]);
    });

    it('should return [-1, -1] for [5, 7, 7, 8, 8, 10] and target 6', () => {
        expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1]);
    });

    it('should return [-1, -1] for an empty array and target 0', () => {
        expect(searchRange([], 0)).toEqual([-1, -1]);
    });

    it('should return [0, 0] for [1] and target 1', () => {
        expect(searchRange([1], 1)).toEqual([0, 0]);
    });

    it('should return [0, 4] for [2, 2, 2, 2, 2] and target 2', () => {
        expect(searchRange([2, 2, 2, 2, 2], 2)).toEqual([0, 4]);
    });

    it('should return [0, 1] for [2, 2] and target 2', () => {
        expect(searchRange([2, 2], 2)).toEqual([0, 1]);
    });
});
