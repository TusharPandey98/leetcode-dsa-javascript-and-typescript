import canConstruct from "./canConstruct#383";

describe('canConstruct', () => {
    it('should return true if ransomNote can be constructed from magazine', () => {
        expect(canConstruct('a', 'a')).toBe(true);
        expect(canConstruct('aa', 'aa')).toBe(true);
        expect(canConstruct('aa', 'aab')).toBe(true);
        expect(canConstruct('abc', 'aabbcc')).toBe(true);
        expect(canConstruct('ab', 'aabbcc')).toBe(true);
    });

    it('should return false if ransomNote cannot be constructed from magazine', () => {
        expect(canConstruct('a', 'b')).toBe(false);
        expect(canConstruct('aa', 'a')).toBe(false);
        expect(canConstruct('aab', 'aa')).toBe(false);
        expect(canConstruct('abc', 'ab')).toBe(false);
        expect(canConstruct('aabbcc', 'abc')).toBe(false);
    });

    it('should return true for empty ransomNote', () => {
        expect(canConstruct('', 'abc')).toBe(true);
        expect(canConstruct('', '')).toBe(true);
    });

    it('should return true for empty magazine', () => {
        expect(canConstruct('a', '')).toBe(false);
        expect(canConstruct('', '')).toBe(true);
    });

    it('should handle uppercase and lowercase characters', () => {
        expect(canConstruct('A', 'a')).toBe(false);
        expect(canConstruct('a', 'A')).toBe(false);
        // expect(canConstruct('AaB', 'AbC')).toBe(true);
        // expect(canConstruct('AaB', 'aABc')).toBe(true);
    });
});
