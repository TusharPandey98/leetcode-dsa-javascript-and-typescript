import maximumProduct from "./maximumProduct#628";

describe('maximumProduct', () => {
    it('should return the maximum product of three numbers from the array', () => {
        expect(maximumProduct([1, 2, 3])).toBe(6);
        expect(maximumProduct([-1, -2, -3])).toBe(-6);
        expect(maximumProduct([1, 2, 3, 4])).toBe(24);
        expect(maximumProduct([-1, -2, 3, 4])).toBe(8);
        expect(maximumProduct([1, -2, -3, -4])).toBe(12);
        expect(maximumProduct([10, -10, 1, 3])).toBe(30);
    });

    it('should handle arrays with less than 3 elements', () => {
        expect(maximumProduct([1])).toBe(0);
        expect(maximumProduct([1, 2])).toBe(0);
        expect(maximumProduct([1, 2, 3])).toBe(6);
    });

    it('should handle arrays with negative numbers', () => {
        expect(maximumProduct([-1, -2, -3])).toBe(-6);
        expect(maximumProduct([-1, -2, 3, 4])).toBe(8);
        expect(maximumProduct([1, -2, -3, -4])).toBe(12);
    });

    it('should handle arrays with zeros', () => {
        expect(maximumProduct([0, 1, 2, 3])).toBe(6);
        expect(maximumProduct([0, 0, 0])).toBe(0);
    });

    it('should handle arrays with mixed positive and negative numbers', () => {
        expect(maximumProduct([-2, -1, 1, 2, 3])).toBe(6);
        expect(maximumProduct([-2, -1, -1, 2, 3])).toBe(6);
    });
});
