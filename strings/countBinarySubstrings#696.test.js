import countBinarySubstrings from "./countBinarySubstrings#696";

describe('countBinarySubstrings', () => {
    it('should return 6 for "00110011"', () => {
        expect(countBinarySubstrings("00110011")).toBe(6);
    });

    it('should return 4 for "10101"', () => {
        expect(countBinarySubstrings("10101")).toBe(4);
    });

    it('should return 3 for "000111"', () => {
        expect(countBinarySubstrings("000111")).toBe(3);
    });

    it('should return 0 for "0"', () => {
        expect(countBinarySubstrings("0")).toBe(0);
    });

    it('should return 0 for "1"', () => {
        expect(countBinarySubstrings("1")).toBe(0);
    });

    it('should return 3 for "00110"', () => {
        expect(countBinarySubstrings("00110")).toBe(3);
    });
});
