import repeatedSubstringPattern from "./repeatedSubstringPattern#459";
describe('repeatedSubstringPattern', () => {
    it('should return false for an empty string', () => {
        expect(repeatedSubstringPattern('')).toBe(false);
    });

    it('should return true for "abab"', () => {
        expect(repeatedSubstringPattern('abab')).toBe(true);
    });

    it('should return false for "aba"', () => {
        expect(repeatedSubstringPattern('aba')).toBe(false);
    });

    it('should return true for "abcabcabcabc"', () => {
        expect(repeatedSubstringPattern('abcabcabcabc')).toBe(true);
    });

    it('should return true for "aaaaa"', () => {
        expect(repeatedSubstringPattern('aaaaa')).toBe(true);
    });

    it('should return true for "xyzxyzxyz"', () => {
        expect(repeatedSubstringPattern('xyzxyzxyz')).toBe(true);
    });

    it('should return true for "aaabaaabaaab"', () => {
        expect(repeatedSubstringPattern('aaabaaabaaab')).toBe(true);
    });

    it('should return true for "abcdabcdabcdabcd"', () => {
        expect(repeatedSubstringPattern('abcdabcdabcdabcd')).toBe(true);
    });

    it('should return false for "abacabacabacab"', () => {
        expect(repeatedSubstringPattern('abacabacabacab')).toBe(false);
    });

    it('should return false for "aaaaabaaaa"', () => {
        expect(repeatedSubstringPattern('aaaaabaaaa')).toBe(false);
    });

    it('should return false for "xyzxyzxy"', () => {
        expect(repeatedSubstringPattern('xyzxyzxy')).toBe(false);
    });
});
