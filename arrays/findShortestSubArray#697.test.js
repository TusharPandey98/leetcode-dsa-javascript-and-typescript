import findShortestSubArray from "./findShortestSubArray#697";

describe('findShortestSubArray', () => {
    it('should find the shortest subarray length with maximum degree', () => {
        const nums = [1, 2, 2, 3, 1];
        expect(findShortestSubArray(nums)).toBe(2);
    });

    it('should handle multiple elements with the same degree', () => {
        const nums = [1, 2, 2, 3, 1, 3];
        expect(findShortestSubArray(nums)).toBe(2);
    });

    it('should handle an empty array', () => {
        const nums = [];
        expect(findShortestSubArray(nums)).toBe(0);
    });

    it('should handle an array with a single element', () => {
        const nums = [1];
        expect(findShortestSubArray(nums)).toBe(1);
    });

    it('should handle an array with all distinct elements', () => {
        const nums = [1, 2, 3, 4, 5];
        expect(findShortestSubArray(nums)).toBe(1);
    });

    it('should handle an array with negative numbers', () => {
        const nums = [-1, -2, -2, -3, -1, -3];
        expect(findShortestSubArray(nums)).toBe(2);
    });
});
