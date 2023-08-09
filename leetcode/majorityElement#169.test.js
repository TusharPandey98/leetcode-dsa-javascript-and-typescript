import majorityElement from "./majorityElement#169";
describe('Majority Element', () => {
    it('should return the correct majority element', () => {
        const nums = [3, 3, 4, 2, 4, 4, 2, 4, 4];
        expect(majorityElement(nums)).toBe(4);
    });

    it('should return null for an empty array', () => {
        const nums = [];
        expect(majorityElement(nums)).toBeNull();
    });

    it('should return null when there is no majority element', () => {
        const nums = [1, 2, 3, 4, 5, 6];
        expect(majorityElement(nums)).toBeNull();
    });

    it('should handle a single-element array', () => {
        const nums = [42];
        expect(majorityElement(nums)).toBe(42);
    });

    it('should handle an array with two different elements', () => {
        const nums = [7, 7, 3, 3, 7, 7, 3, 3, 2];
        expect(majorityElement(nums)).toBeNull();
    });

    it('should handle an array with a majority element at the beginning', () => {
        const nums = [5, 5, 5, 2, 2, 2, 2];
        expect(majorityElement(nums)).toBe(2);
    });

    it('should handle an array with a majority element at the end', () => {
        const nums = [3, 1, 4, 4, 4, 4, 4, 4];
        expect(majorityElement(nums)).toBe(4);
    });

    it('should handle an array with a majority element in the middle', () => {
        const nums = [6, 6, 6, 1, 2, 3, 6, 6, 6];
        expect(majorityElement(nums)).toBe(6);
    });
});
