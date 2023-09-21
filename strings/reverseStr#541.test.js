import reverseStr from "./reverseStr#541";

describe('reverseStr test cases', () => {
    test('Reverse first k characters for every 2k characters', () => {
        expect(reverseStr("abcdefg", 2)).toBe("bacdfeg");
        expect(reverseStr("abcd", 2)).toBe("bacd");
        expect(reverseStr("abcdefgh", 3)).toBe("cbadefhg");
        expect(reverseStr("abcde", 3)).toBe("cbade");
    });

    test('Edge case: k is greater than or equal to the string length', () => {
        expect(reverseStr("abcdefg", 7)).toBe("gfedcba");
        expect(reverseStr("abcde", 5)).toBe("edcba");
    });

    test('Edge case: k is 1', () => {
        expect(reverseStr("abcdefg", 1)).toBe("abcdefg");
        expect(reverseStr("abcde", 1)).toBe("abcde");
    });

    test('Edge case: empty string', () => {
        expect(reverseStr("", 3)).toBe("");
    });

    test('Edge case: k is equal to string length', () => {
        expect(reverseStr("abcd", 4)).toBe("dcba");
    });
})
