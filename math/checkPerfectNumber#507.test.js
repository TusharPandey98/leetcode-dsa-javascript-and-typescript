import checkPerfectNumber from "./checkPerfectNumber#507";
// Test cases
describe('checkPerfectNumber test cases', () => {
    test('28 is a perfect number', () => {
        expect(checkPerfectNumber(28)).toBe(true);
    });

    test('7 is not a perfect number', () => {
        expect(checkPerfectNumber(7)).toBe(false);
    });

    test('2016 is a perfect number', () => {
        expect(checkPerfectNumber(2016)).toBe(false);
    });

    test('Negative numbers should not be perfect', () => {
        expect(checkPerfectNumber(-28)).toBe(false);
    });

    test('1 is not a perfect number', () => {
        expect(checkPerfectNumber(1)).toBe(false);
    });
})