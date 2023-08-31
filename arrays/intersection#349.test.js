import intersection from "./intersection#349";

describe('intersection', () => {
    it('should return the intersection of two arrays', () => {
        expect(intersection([1, 2, 2, 1], [2, 2])).toEqual([2]);
        expect(intersection([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([9,4]);
        expect(intersection([1, 2, 3], [4, 5, 6])).toEqual([]);
    });

    it('should handle arrays with duplicate elements', () => {
        expect(intersection([1, 1, 1, 1], [1, 1, 1])).toEqual([1]);
        expect(intersection([1, 2, 3], [1, 1, 2, 2])).toEqual([1, 2]);
    });

    it('should return an empty array if there are no common elements', () => {
        expect(intersection([1, 2, 3], [4, 5, 6])).toEqual([]);
        expect(intersection([], [1, 2, 3])).toEqual([]);
    });
});
