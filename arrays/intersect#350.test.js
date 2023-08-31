import intersect from "./intersect#350";

describe('intersect', () => {
    it('should return the intersection of two arrays', () => {
        expect(intersect([1, 2, 2, 1], [2, 2])).toEqual([2,2]);
        expect(intersect([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([9,4]);
        expect(intersect([1, 2, 3], [4, 5, 6])).toEqual([]);
    });

    it('should handle arrays with duplicate elements', () => {
        expect(intersect([1, 1, 1, 1], [1, 1, 1])).toEqual([1, 1, 1]);
        expect(intersect([1, 2, 3], [1, 1, 2, 2])).toEqual([1, 2]);
    });

    it('should return an empty array if there are no common elements', () => {
        expect(intersect([1, 2, 3], [4, 5, 6])).toEqual([]);
        expect(intersect([], [1, 2, 3])).toEqual([]);
    });

    it('should handle arrays with different lengths', () => {
        expect(intersect([1, 2, 3], [2, 3, 4, 5])).toEqual([2, 3]);
        expect(intersect([4, 5], [4, 5, 6, 7])).toEqual([4, 5]);
    });
});
