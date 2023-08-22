import isAnagram from "./isAnagram#242";

describe('isAnagram', () => {
    test('should return true for valid anagrams with Unicode characters', () => {
        expect(isAnagram('漢字', '字漢')).toBe(true); // Anagrams in Unicode
        expect(isAnagram('hello', 'olelh')).toBe(true); // Anagrams in ASCII
    });

    test('should return false for strings with different lengths', () => {
        expect(isAnagram('abc', 'ab')).toBe(false);
    });

    test('should return false for strings that are not anagrams', () => {
        expect(isAnagram('hello', 'world')).toBe(false); // Completely different strings
        expect(isAnagram('hello', 'olell')).toBe(false); // Different character frequencies
    });
});
