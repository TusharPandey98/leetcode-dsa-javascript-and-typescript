import arrayPairSum from "./arrayPairSum#561";
describe('arrayPairSum', () => {
    it('should return 0 for an empty array', () => {
        expect(arrayPairSum([])).toBe(0);
    });

    it('should return the correct sum for an array with two elements', () => {
        expect(arrayPairSum([1, 2])).toBe(1);
    });

    it('should return the correct sum for an array with multiple elements', () => {
        expect(arrayPairSum([1, 4, 3, 2])).toBe(4);
    });

    it('should return 0 if all elements are negative', () => {
        expect(arrayPairSum([-1, -4, -3, -2])).toBe(-6);
    });

    it('should handle duplicate elements correctly', () => {
        expect(arrayPairSum([1, 2, 2, 1])).toBe(3);
    });

    it('should handle large numbers correctly', () => {
        expect(arrayPairSum([1000, 2000, 3000, 4000])).toBe(4000);
    });
});
