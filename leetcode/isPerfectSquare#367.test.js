import isPerfectSquare from "./isPerfectSquare#367";

describe('isPerfectSquare', () => {
    it('should return true for perfect squares', () => {
        expect(isPerfectSquare(1)).toBe(true);
        expect(isPerfectSquare(4)).toBe(true);
        expect(isPerfectSquare(9)).toBe(true);
        expect(isPerfectSquare(16)).toBe(true);
        expect(isPerfectSquare(25)).toBe(true);
    });

    it('should return false for non-perfect squares', () => {
        expect(isPerfectSquare(2)).toBe(false);
        expect(isPerfectSquare(6)).toBe(false);
        expect(isPerfectSquare(10)).toBe(false);
        expect(isPerfectSquare(15)).toBe(false);
        expect(isPerfectSquare(21)).toBe(false);
    });

    it('should handle large perfect squares', () => {
        expect(isPerfectSquare(1000000)).toBe(true);
        expect(isPerfectSquare(100000000)).toBe(true);
    });
});
