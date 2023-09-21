import findLUSlength from "./findLUSlength#521";

describe('findLUSlength test cases', () => {
    test('Two different strings, return the length of the longer string', () => {
        expect(findLUSlength('aba', 'cdc')).toBe(3);
        expect(findLUSlength('aaa', 'bbb')).toBe(3);
    });

    test('Two identical strings, return -1', () => {
        expect(findLUSlength('abc', 'abc')).toBe(-1);
        expect(findLUSlength('xyz', 'xyz')).toBe(-1);
    });

    test('One string is a subsequence of the other, return the length of the longer string', () => {
        expect(findLUSlength('abcdef', 'abc')).toBe(6); // 'abcdef' is not a subsequence of 'abc'
        expect(findLUSlength('hello', 'hello world')).toBe(11); // 'hello world' is not a subsequence of 'hello'
    });

})
