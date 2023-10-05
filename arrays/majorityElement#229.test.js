import majorityElement from "./majorityElement#229";

describe('majorityElement', () => {
    it('should return an empty array for an empty input', () => {
        expect(majorityElement([])).toEqual([]);
    });

    it('should find the majority element correctly (single majority)', () => {
        const nums = [3, 2, 3];
        expect(majorityElement(nums)).toEqual([3]);
    });

    it('should find the majority elements correctly (multiple majorities)', () => {
        const nums = [1, 2, 2, 3, 1, 3];
        expect(majorityElement(nums)).toEqual([]);
    });

    it('should handle an array with no majority elements', () => {
        const nums = [1, 2, 3, 4];
        expect(majorityElement(nums)).toEqual([]);
    });

    it('should handle an array with a single element', () => {
        const nums = [5];
        expect(majorityElement(nums)).toEqual([5]);
    });

    it('should handle an array with two majority elements', () => {
        const nums = [3, 3, 2, 2, 2, 3];
        expect(majorityElement(nums)).toEqual([3, 2]);
    });

    it('should handle an array with negative numbers', () => {
        const nums = [-1, -2, -1, -3, -1, -3];
        expect(majorityElement(nums)).toEqual([-1]);
    });
});
