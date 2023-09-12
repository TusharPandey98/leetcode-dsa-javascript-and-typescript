import findMaxConsecutiveOnes from "./findMaxConsecutiveOnes#485";

// Test case
describe('findMaxConsecutiveOnes', () => {
    it('should return 3 for [1, 1, 0, 1, 1, 1, 0, 1, 1, 1]', () => {
        const nums = [1, 1, 0, 1, 1, 1, 0, 1, 1, 1];
        const result = findMaxConsecutiveOnes(nums);
        expect(result).toBe(3);
    });

    it('should return 0 for an empty array', () => {
        const nums = [];
        const result = findMaxConsecutiveOnes(nums);
        expect(result).toBe(0);
    });

    it('should return 1 for an array with a single 1', () => {
        const nums = [1];
        const result = findMaxConsecutiveOnes(nums);
        expect(result).toBe(1);
    });

    // Add more test cases for edge cases and other scenarios as needed
});
