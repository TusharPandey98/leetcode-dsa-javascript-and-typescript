import findLengthOfLCIS from "./findLengthOfLCIS#674";

describe('findLengthOfLCIS function', () => {
    test('Example 1', () => {
        const nums = [1, 3, 5, 4, 7];
        expect(findLengthOfLCIS(nums)).toBe(3);
    });

    test('Example 2', () => {
        const nums = [2, 2, 2, 2, 2];
        expect(findLengthOfLCIS(nums)).toBe(1);
    });

    test('Empty array', () => {
        const nums = [];
        expect(findLengthOfLCIS(nums)).toBe(0);
    });

    test('Single element', () => {
        const nums = [1];
        expect(findLengthOfLCIS(nums)).toBe(1);
    });

    test('All elements are the same', () => {
        const nums = [4, 4, 4, 4];
        expect(findLengthOfLCIS(nums)).toBe(1);
    });

    test('All elements are in descending order', () => {
        const nums = [5, 4, 3, 2, 1];
        expect(findLengthOfLCIS(nums)).toBe(1);
    });

    test('All elements are in ascending order', () => {
        const nums = [1, 2, 3, 4, 5];
        expect(findLengthOfLCIS(nums)).toBe(5);
    });
});
