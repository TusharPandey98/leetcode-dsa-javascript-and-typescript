import backspaceCompare from "./backSpaceCompare#844";

describe('backspaceCompare', () => {
    it('should return true for equal strings without backspaces', () => {
        expect(backspaceCompare('abc', 'abc')).toBe(true);
        expect(backspaceCompare('ab#c', 'ab#c')).toBe(true);
    });

    it('should return true for equal strings with backspaces', () => {
        expect(backspaceCompare('ab##c', 'c')).toBe(true);
        expect(backspaceCompare('a##c', '#a#c')).toBe(true);
    });

    it('should return false for different strings', () => {
        expect(backspaceCompare('abc', 'def')).toBe(false);
        expect(backspaceCompare('a#c', 'b')).toBe(false);
    });

    it('should handle backspaces at the beginning and end of strings', () => {
        expect(backspaceCompare('#abc#', 'ab')).toBe(true);
        expect(backspaceCompare('##abc', 'abc')).toBe(true);
        expect(backspaceCompare('ab#c#', 'a')).toBe(true);
    });

    it('should handle empty strings', () => {
        expect(backspaceCompare('', '')).toBe(true);
        expect(backspaceCompare('#', '#')).toBe(true);
        expect(backspaceCompare('a#b#c#', '')).toBe(true);
    });

    it('should handle complex cases', () => {
        expect(backspaceCompare('bxj##tw', 'bxo#j##tw')).toBe(true);
        expect(backspaceCompare('y#tu#t#', 'y#t#u#t#')).toBe(false);
    });
});
