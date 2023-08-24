import isUgly from "./isUgly#263";

describe('isUgly', () => {
    it('should return true for ugly numbers', () => {
        expect(isUgly(1)).toBe(true);
        expect(isUgly(2)).toBe(true);
        expect(isUgly(3)).toBe(true);
        expect(isUgly(5)).toBe(true);
        expect(isUgly(6)).toBe(true);
        expect(isUgly(8)).toBe(true);
        expect(isUgly(9)).toBe(true);
        expect(isUgly(10)).toBe(true);
        expect(isUgly(12)).toBe(true);
        expect(isUgly(15)).toBe(true);
        expect(isUgly(16)).toBe(true);
        expect(isUgly(18)).toBe(true);
        expect(isUgly(20)).toBe(true);
        expect(isUgly(24)).toBe(true);
        expect(isUgly(25)).toBe(true);
        // Add more test cases for other ugly numbers
    });

    it('should return false for non-ugly numbers', () => {
        expect(isUgly(0)).toBe(false);
        expect(isUgly(-6)).toBe(false);
        expect(isUgly(7)).toBe(false);
        expect(isUgly(11)).toBe(false);
        expect(isUgly(13)).toBe(false);
        expect(isUgly(14)).toBe(false);
        expect(isUgly(21)).toBe(false);
        expect(isUgly(22)).toBe(false);
        expect(isUgly(26)).toBe(false);
        // Add more test cases for other non-ugly numbers
    });
});
