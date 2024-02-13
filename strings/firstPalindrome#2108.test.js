import firstPalindrome from "./firstPalindrome#2108";

describe("firstPalindrome function", () => {
    test("returns the first palindrome in the array of words", () => {
        expect(firstPalindrome(["level", "hello", "world"])).toBe("level");
        expect(firstPalindrome(["racecar", "apple", "banana"])).toBe("racecar");
        expect(firstPalindrome(["ab", "cd", "ba"])).toBe("");
        expect(firstPalindrome(["ab", "ba", "cb"])).toBe("");
        expect(firstPalindrome(["ab", "ba", "cb", "cc"])).toBe("cc");
        expect(firstPalindrome(["racecar", "apple"])).toBe("racecar");
        expect(firstPalindrome(["a", "b", "c"])).toBe("a");
        expect(firstPalindrome([])).toBe("");
    });
});