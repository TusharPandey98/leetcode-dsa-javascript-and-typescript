import numIdenticalPairs from "./numIdenticalPairs#1512";

describe('numIdenticalPairs Test cases', () => {
    test('Example 1', () => {
        const nums = [1, 2, 3, 1, 1, 3];
        expect(numIdenticalPairs(nums)).toBe(4);
    });

    test('Example 2', () => {
        const nums = [1, 1, 1, 1];
        expect(numIdenticalPairs(nums)).toBe(6);
    });

    test('No identical pairs', () => {
        const nums = [1, 2, 3, 4, 5];
        expect(numIdenticalPairs(nums)).toBe(0);
    });

    test('Empty array', () => {
        const nums = [];
        expect(numIdenticalPairs(nums)).toBe(0);
    });

    test('Single element', () => {
        const nums = [1];
        expect(numIdenticalPairs(nums)).toBe(0);
    });
});
