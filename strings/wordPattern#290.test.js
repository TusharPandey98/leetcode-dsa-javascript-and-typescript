import wordPattern from "./wordPattern#290";
describe('wordPattern', () => {
    it('returns true for valid word patterns', () => {
        expect(wordPattern("abba", "dog cat cat dog")).toBe(true);
        expect(wordPattern("aaaa", "dog dog dog dog")).toBe(true);
        expect(wordPattern("abc", "dog cat dog")).toBe(false);
    });

    it('returns false for invalid word patterns', () => {
        expect(wordPattern("abba", "dog cat cat fish")).toBe(false);
        expect(wordPattern("aaaa", "dog cat cat dog")).toBe(false);
        expect(wordPattern("abba", "dog dog dog dog")).toBe(false);
        expect(wordPattern("abc", "dog cat cat")).toBe(false);
        expect(wordPattern("abc", "dog cat cat dog")).toBe(false);
    });

    it('handles patterns and words with different lengths', () => {
        expect(wordPattern("ab", "dog cat")).toBe(true);
        expect(wordPattern("aabb", "dog cat cat dog")).toBe(false);
    });
});
