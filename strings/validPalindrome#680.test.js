import validPalindrome from "./validPalindrome#680";

describe('validPalindrome test cases', () => {
    it('"abc" should return false', () => {
        expect(validPalindrome('abc')).toBe(false);
    })
    it('"ab" should return true', () => {
        expect(validPalindrome('ab')).toBe(true);
    })
    it('"abca" should return true', () => {
        expect(validPalindrome('abca')).toBe(true);
    })
    it('"aac" should return true', () => {
        expect(validPalindrome('aac')).toBe(true);
    })
    it('"a" should return true', () => {
        expect(validPalindrome('a')).toBe(true);
    })
})