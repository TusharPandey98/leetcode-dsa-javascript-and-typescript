import findTheDifference from "./findTheDifference#389";

describe('findTheDifference', () => {
    it('should return the differing character', () => {
        expect(findTheDifference('abcd', 'abcde')).toBe('e');
        expect(findTheDifference('a', 'aa')).toBe('a');
        expect(findTheDifference('abcdef', 'fbcdeag')).toBe('g');
        expect(findTheDifference('', 'x')).toBe('x');
    });

    it('should handle uppercase characters', () => {
        expect(findTheDifference('aA', 'Aa')).toBe('a');
        expect(findTheDifference('ABC', 'ABCD')).toBe('D');
    });

    it('should handle special characters', () => {
        expect(findTheDifference('@#', '#@!')).toBe('!');
    });
});
