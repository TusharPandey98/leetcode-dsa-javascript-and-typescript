import integerBreak from "./integerBreak#343";

describe('integerBreak function', () => {
    it('should return 1 for n = 2', () => {
        expect(integerBreak(2)).toBe(1);
    });

    it('should return 36 for n = 10', () => {
        expect(integerBreak(10)).toBe(36);
    });

    it('should return 6 for n = 5', () => {
        expect(integerBreak(5)).toBe(6);
    });

    it('should return 18 for n = 8', () => {
        expect(integerBreak(8)).toBe(18);
    });

    it('should return 162 for n = 13', () => {
        expect(integerBreak(13)).toBe(108);
    });

    it('should return 1458 for n = 18', () => {
        expect(integerBreak(18)).toBe(729);
    });

    it('should return 1162261467 for n = 30', () => {
        expect(integerBreak(30)).toBe(59049);
    });

    it('should return 22226464256000 for n = 58', () => {
        expect(integerBreak(58)).toBe(1549681956);
    });
});
