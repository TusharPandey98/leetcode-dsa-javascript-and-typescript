import findMaxAverage from "./findMaxAverage#643";

describe('findMaxAverage', () => {
    it('should calculate the maximum average for a given subarray length', () => {
        // Test case 1: Example case
        expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBeCloseTo(12.75, 5);

        // Test case 2: All positive numbers
        expect(findMaxAverage([1, 2, 3, 4, 5], 3)).toBeCloseTo(4, 5);

        // Test case 3: All negative numbers
        expect(findMaxAverage([-1, -2, -3, -4, -5], 2)).toBeCloseTo(-1.5, 5);

        // Test case 4: Single-element array
        expect(findMaxAverage([10], 1)).toBeCloseTo(10, 5);
    });

    it('should handle subarray length greater than the array length', () => {
        // Test case 5: Subarray length greater than array length
        expect(findMaxAverage([1, 2, 3,4], 4)).toBeCloseTo(2.5, 5);
    });
});
