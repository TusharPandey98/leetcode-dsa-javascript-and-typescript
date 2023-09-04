import firstUniqChar from "./firstUniqChar#387";


describe('firstUniqChar', () => {
    it('should return the index of the first unique character', () => {
        expect(firstUniqChar('leetcode')).toBe(0); // 'l' is the first unique character
        expect(firstUniqChar('loveleetcode')).toBe(2); // 'v' is the first unique character
        expect(firstUniqChar('aabbcc')).toBe(-1); // No unique character
    });

    it('should return -1 for an empty string', () => {
        expect(firstUniqChar('')).toBe(-1);
    });

    it('should handle a single unique character', () => {
        expect(firstUniqChar('a')).toBe(0);
        expect(firstUniqChar('b')).toBe(0);
    });

});
