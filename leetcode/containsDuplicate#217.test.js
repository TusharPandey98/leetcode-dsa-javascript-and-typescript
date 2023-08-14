import containsDuplicate from "./containsDuplicate#217";

describe('containsDuplicate', () => {
    it('should return true for an array with duplicates', () => {
        expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
        expect(containsDuplicate([4, 5, 6, 6, 7])).toBe(true);
        expect(containsDuplicate([3, 3, 3, 3, 3])).toBe(true);
    });

    it('should return false for an array without duplicates', () => {
        expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
        expect(containsDuplicate([9, 8, 7, 6, 5])).toBe(false);
        expect(containsDuplicate([])).toBe(false); // Empty array
    });
});
