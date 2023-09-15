import detectCapitalUse from "./detectCapitalUse#520";
describe('detectCapitalUse Test cases', () => { 
test('All lowercase word should return true', () => {
  expect(detectCapitalUse('leetcode')).toBe(true);
});

test('All uppercase word should return true', () => {
  expect(detectCapitalUse('USA')).toBe(true);
});

test('Title case word should return true', () => {
  expect(detectCapitalUse('Title')).toBe(true);
});

test('Mixed case word should return false', () => {
  expect(detectCapitalUse('FlaG')).toBe(false);
});

test('Mixed case word with one capital should return false', () => {
  expect(detectCapitalUse('FGlG')).toBe(false);
});

test('All uppercase word with one lowercase letter should return false', () => {
  expect(detectCapitalUse('FLAG')).toBe(true);
});

test('Two uppercase letters should return true', () => {
  expect(detectCapitalUse('FL')).toBe(true);
});

test('Single lowercase letter should return true', () => {
  expect(detectCapitalUse('a')).toBe(true);
});

test('Single uppercase letter should return true', () => {
  expect(detectCapitalUse('A')).toBe(true);
});

test('Mixed case word with one lowercase letter should return true', () => {
  expect(detectCapitalUse('aA')).toBe(false);
});

test('Mixed case word with one uppercase letter should return true', () => {
  expect(detectCapitalUse('aF')).toBe(false);
});

test('Mixed case word with first letter uppercase should return true', () => {
  expect(detectCapitalUse('Fa')).toBe(true);
});

test('Empty string should return true', () => {
  expect(detectCapitalUse('')).toBe(true);
});

 })