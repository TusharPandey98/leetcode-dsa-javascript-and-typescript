import countSubstrings from "./countSubstrings#647";

describe('countSubstrings function', () => {
  test('Count substrings for a string with no palindromic substrings', () => {
    expect(countSubstrings("xyz")).toBe(3); // Each character forms a single-character palindrome
  });

  test('Count substrings for a string with single-character palindromic substrings', () => {
    expect(countSubstrings("aba")).toBe(4); // "a", "b", "a", "aba"
  });

  test('Count substrings for a string with multi-character palindromic substrings', () => {
    expect(countSubstrings("aaa")).toBe(6); // "a", "a", "a", "aa", "aa", "aaa"
  });

  test('Count substrings for an empty string', () => {
    expect(countSubstrings("")).toBe(0); // Empty string has no substrings
  });

  test('Count substrings for a string with all same characters', () => {
    expect(countSubstrings("aaaa")).toBe(10); // "a", "a", "a", "a", "aa", "aa", "aa", "aaa", "aaa", "aaaa"
  });

  test('Count substrings for a string with alternating characters', () => {
    expect(countSubstrings("abcd")).toBe(4); // Each character forms a single-character palindrome
  });

  test('Count substrings for a string with all distinct characters', () => {
    expect(countSubstrings("abcdefg")).toBe(7); // Each character forms a single-character palindrome
  });

  // Add more test cases as needed to cover other scenarios
});
