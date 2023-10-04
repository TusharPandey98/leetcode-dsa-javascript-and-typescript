import hasAlternatingBits from "./hasAlternatingBits#693";

describe('hasAlternatingBits', () => {
    it('should return true for alternating bits (e.g., 5)', () => {
        expect(hasAlternatingBits(5)).toBe(true);
    });

    it('should return true for alternating bits (e.g., 10)', () => {
        expect(hasAlternatingBits(10)).toBe(true);
    });

    it('should return false for non-alternating bits (e.g., 7)', () => {
        expect(hasAlternatingBits(7)).toBe(false);
    });

    it('should return false for non-alternating bits (e.g., 11)', () => {
        expect(hasAlternatingBits(11)).toBe(false);
    });

    it('should return true for a single bit (e.g., 1)', () => {
        expect(hasAlternatingBits(1)).toBe(true);
    });

    it('should return false for negative numbers (e.g., -5)', () => {
        expect(hasAlternatingBits(-5)).toBe(false);
    });

    it('should return true for a large number (e.g., 1431655765)', () => {
        expect(hasAlternatingBits(1431655765)).toBe(true);
    });

    it('should return false for a large number (e.g., 1431655767)', () => {
        expect(hasAlternatingBits(1431655767)).toBe(false);
    });
});
