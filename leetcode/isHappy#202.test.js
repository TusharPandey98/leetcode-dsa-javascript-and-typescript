import isHappy from "./isHappy#202";

describe('isHappy test cases', () => {
    test('1 should return true', () => {
        expect(isHappy(1)).toBe(true);
    })
    test('7 should return true', () => {
        expect(isHappy(7)).toBe(true);
    })
    test('10 should return true', () => {
        expect(isHappy(10)).toBe(true);
    })
    test('13 should return true', () => {
        expect(isHappy(13)).toBe(true);
    })
    test('19 should return true', () => {
        expect(isHappy(19)).toBe(true);
    })
    test('18 should return false', () => {
        expect(isHappy(18)).toBe(false);
    })
})