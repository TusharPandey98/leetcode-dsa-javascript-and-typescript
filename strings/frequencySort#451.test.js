import frequencySort from "./frequencySort#451";

describe('frequencySort', () => {
  it('should sort the characters in decreasing order based on frequency', () => {
    expect(frequencySort("tree")).toMatch(/eert|eetr/);
    expect(frequencySort("cccaaa")).toMatch(/aaaccc|cccaaa/);
    expect(frequencySort("Aabb")).toMatch(/bbAa|bbaA/);
  });

  it('should handle empty string', () => {
    expect(frequencySort("")).toBe("");
  });

  it('should handle string with single character', () => {
    expect(frequencySort("a")).toBe("a");
    expect(frequencySort("A")).toBe("A");
    expect(frequencySort("1")).toBe("1");
  });

  it('should handle string with all characters of same frequency', () => {
    expect(frequencySort("abcd")).toMatch(/abcd|dcba/);
    expect(frequencySort("aabbccdd")).toMatch(/aabbccdd|ddccbbaa/);
  });

  it('should handle string with mixed case characters', () => {
    expect(frequencySort("aAaAaA")).toMatch(/aaaAAA|AAAaaa/);
  });

  it('should handle string with digits', () => {
    expect(frequencySort("122333")).toMatch(/333221|233321/);
  });
});
