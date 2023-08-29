import isPowerOfThree from "./isPowerOfThree#326";

describe('isPowerOfThree', () => {
    test('Test case 1', () => {
        expect(isPowerOfThree(1)).toBe(true);
        expect(isPowerOfThree(3)).toBe(true);
        expect(isPowerOfThree(9)).toBe(true);
    });

    test('Test case 2', () => {
        expect(isPowerOfThree(2)).toBe(false);
        expect(isPowerOfThree(5)).toBe(false);
        expect(isPowerOfThree(15)).toBe(false);
    });

    // Add more test cases as needed
});
