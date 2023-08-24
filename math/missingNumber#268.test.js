import missingNumber from "./missingNumber#268";

describe('missingNumber', () => {
    it('should return the missing number in an array with one missing element', () => {
        expect(missingNumber([0, 1, 3])).toBe(2);
    });

    it('should return the missing number in an array with multiple missing elements', () => {
        expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
    });

    it('should return the missing number when the array starts from 1', () => {
        expect(missingNumber([1, 2, 3, 4, 5])).toBe(0);
    });

    it('should return the missing number when the array contains only one element', () => {
        expect(missingNumber([0])).toBe(1);
    });

    it('should return the missing number when the array contains two elements in reverse order', () => {
        expect(missingNumber([1, 0])).toBe(2);
    });
});
