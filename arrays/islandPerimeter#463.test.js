import islandPerimeter from "./islandPerimeter#463";

describe('islandPerimeter', () => {
    it('should calculate the perimeter of an island correctly', () => {
        // Test case input
        const grid = [
            [0, 1, 0, 0],
            [1, 1, 1, 0],
            [0, 1, 0, 0],
            [1, 1, 0, 0],
        ];

        // Expected result for the given input
        const expectedPerimeter = 16;

        // Call the function and check the result
        const result = islandPerimeter(grid);
        expect(result).toEqual(expectedPerimeter);
    });

    it('should handle an empty grid', () => {
        // Test case input (empty grid)
        const grid = [];

        // Expected result for an empty grid
        const expectedPerimeter = 0;

        // Call the function and check the result
        const result = islandPerimeter(grid);
        expect(result).toEqual(expectedPerimeter);
    });

    // You can add more test cases for edge cases and other scenarios as needed
});
