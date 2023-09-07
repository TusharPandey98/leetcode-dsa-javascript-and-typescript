import countSegments from "./countSegments#434";

describe('countSegments', () => {
    it('should return 0 for an empty string', () => {
        expect(countSegments('')).toBe(0);
    });

    it('should return 1 for a string with one segment', () => {
        expect(countSegments('Hello')).toBe(1);
    });

    it('should count multiple segments separated by spaces', () => {
        expect(countSegments('Hello World')).toBe(2);
    });

    it('should count segments with leading and trailing spaces', () => {
        expect(countSegments("                ")).toBe(0);
    });

    it('should handle multiple consecutive spaces as one separator', () => {
        expect(countSegments(", , , ,        a, eaefa")).toBe(6);
    });
});
