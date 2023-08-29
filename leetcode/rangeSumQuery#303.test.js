import NumArray from "./rangeSumQuery#303";

describe('NumArray', () => {
    test('Test case 1', () => {
        const nums = [-2, 0, 3, -5, 2, -1];
        const numArray = new NumArray(nums);
        expect(numArray.sumRange(0, 2)).toBe(1);
        expect(numArray.sumRange(2, 5)).toBe(-1);
        expect(numArray.sumRange(0, 5)).toBe(-3);
    });

    test('Test case 2', () => {
        const nums = [1, 2, 3, 4, 5];
        const numArray = new NumArray(nums);
        expect(numArray.sumRange(0, 2)).toBe(6);
        expect(numArray.sumRange(1, 3)).toBe(9);
        expect(numArray.sumRange(0, 4)).toBe(15);
    });

    // Add more test cases as needed
});
