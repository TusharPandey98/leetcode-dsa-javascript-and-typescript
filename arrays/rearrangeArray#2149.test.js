import rearrangeArray from "./rearrangeArray#2149";

describe('rearrangeArray', () => {
    it('should rearrange positive and negative numbers alternatively', () => {
        expect(rearrangeArray([1, 2, 3, 4, -1, -2, -3, -4])).toEqual([1, -1, 2, -2, 3, -3, 4, -4]);
    });

    it('should rearrange positive and negative numbers alternatively with duplicates', () => {
        expect(rearrangeArray([1, 1, 2, 2, 3, 3, -1, -1, -2, -2, -3, -3])).toEqual([1, -1, 1, -1, 2, -2, 2, -2, 3, -3, 3, -3]);
    });

    it('should handle empty input', () => {
        expect(rearrangeArray([])).toEqual([]);
    });

    it('should handle single element input', () => {
        expect(rearrangeArray([1])).toEqual([1]);
    });
});
