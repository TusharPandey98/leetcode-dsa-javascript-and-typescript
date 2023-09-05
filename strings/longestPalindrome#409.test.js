import longestPalindrome from "./longestPalindrome#409";

describe('longestPalindrome', () => {
    it('should return 7 for "abccccdd"', () => {
        expect(longestPalindrome('abccccdd')).toBe(7);
    });

    it('should return 1 for "a"', () => {
        expect(longestPalindrome('a')).toBe(1);
    });

    it('should return 2 for "bb"', () => {
        expect(longestPalindrome('bb')).toBe(2);
    });

    it('should return 0 for an empty string', () => {
        expect(longestPalindrome('')).toBe(0);
    });

    it('should return 8 for "abcddcba"', () => {
        expect(longestPalindrome('abcddcba')).toBe(8);
    });
});
