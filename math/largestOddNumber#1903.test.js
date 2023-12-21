import largestOddNumber from "./largestOddNumber#1903";
describe('largestOddNumber function', () => {
  test('Returns the largest odd number from the input', () => {
    expect(largestOddNumber("123456789")).toBe("123456789");
    expect(largestOddNumber("24680")).toBe("");
    expect(largestOddNumber("111222333444555666777888999")).toBe("111222333444555666777888999");
    expect(largestOddNumber("246135")).toBe("246135");
  });

  test('Returns empty string for no odd number in input', () => {
    expect(largestOddNumber("24680")).toBe("");
    expect(largestOddNumber("0")).toBe("");
    expect(largestOddNumber("222222")).toBe("");
  });
});
