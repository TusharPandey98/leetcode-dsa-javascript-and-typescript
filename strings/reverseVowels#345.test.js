import reverseVowels from "./reverseVowels#345";

describe('reverseVowels', () => {
    it('should reverse the vowels in a string', () => {
        expect(reverseVowels('hello')).toBe('holle');
        expect(reverseVowels('leetcode')).toBe('leotcede');
        expect(reverseVowels('programming')).toBe('prigrammong');
        expect(reverseVowels('aeiouAEIOU')).toBe('UOIEAuoiea');
    });

    it('should not change the string if it has no vowels', () => {
        expect(reverseVowels('bcdfghjkl')).toBe('bcdfghjkl');
        expect(reverseVowels('')).toBe('');
    });
});
