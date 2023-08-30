import isPowerOfFour from "./isPowerOfFour#342";

describe('isPowerOfFour', () => {
    it('should return true for powers of two', () => {
        expect(isPowerOfFour(1)).toBe(true);
        expect(isPowerOfFour(4)).toBe(true);
        expect(isPowerOfFour(16)).toBe(true);
        expect(isPowerOfFour(64)).toBe(true);
    });

    it('should return false for non-powers of four', () => {
        expect(isPowerOfFour(0)).toBe(false);
        expect(isPowerOfFour(3)).toBe(false);
        expect(isPowerOfFour(5)).toBe(false);
        expect(isPowerOfFour(9)).toBe(false);
        expect(isPowerOfFour(15)).toBe(false);
        expect(isPowerOfFour(25)).toBe(false);
    });

    it('should return false for negative numbers', () => {
        expect(isPowerOfFour(-2)).toBe(false);
        expect(isPowerOfFour(-8)).toBe(false);
        expect(isPowerOfFour(-16)).toBe(false);
    });
});