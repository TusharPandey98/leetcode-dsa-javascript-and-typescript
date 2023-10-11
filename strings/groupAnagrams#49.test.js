import groupAnagrams from "./groupAnagrams#49";


describe('groupAnagrams', () => {
  it('should group anagrams correctly', () => {
    const strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const expected1 = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];
    expect(groupAnagrams(strs1)).toEqual(expected1);

    const strs2 = [""];
    const expected2 = [[""]];
    expect(groupAnagrams(strs2)).toEqual(expected2);

    const strs3 = ["a"];
    const expected3 = [["a"]];
    expect(groupAnagrams(strs3)).toEqual(expected3);

    // Add more test cases as needed
  });
});
